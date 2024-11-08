import { useState, ChangeEvent, FormEvent } from 'react';

type FormFields = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  additionalInfo: string;
};

type SubmitStatus = {
  type: 'success' | 'error' | null;
  message: string;
};

const INITIAL_FORM_STATE: FormFields = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  additionalInfo: '',
};

const VALIDATION_PATTERNS = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^\+?[\d\s-]{10,}$/,
} as const;

const ERROR_MESSAGES = {
  fullName: 'Please enter your full name',
  email: 'Please enter a valid email address',
  phone: 'Please enter a valid phone number',
  generic: 'Something went wrong. Please try again later.',
  success: 'Your appointment request has been sent successfully!',
} as const;

export const useContactForm = () => {
  const [formData, setFormData] = useState<FormFields>(INITIAL_FORM_STATE);
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({
    type: null,
    message: '',
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.firstName || !formData.lastName) {
      return { isValid: false, message: ERROR_MESSAGES.fullName };
    }

    if (!VALIDATION_PATTERNS.email.test(formData.email)) {
      return { isValid: false, message: ERROR_MESSAGES.email };
    }

    if (!VALIDATION_PATTERNS.phone.test(formData.phone)) {
      return { isValid: false, message: ERROR_MESSAGES.phone };
    }

    return { isValid: true, message: '' };
  };

  const submitForm = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return { success: true };
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    const { isValid, message } = validateForm();
    if (!isValid) {
      setSubmitStatus({ type: 'error', message });
      return;
    }

    try {
      setIsLoading(true);
      setSubmitStatus({ type: null, message: '' });
      
      const { success } = await submitForm();
      
      if (success) {
        setSubmitStatus({
          type: 'success',
          message: ERROR_MESSAGES.success,
        });
        setFormData(INITIAL_FORM_STATE);
      }
    } catch  {
      setSubmitStatus({
        type: 'error',
        message: ERROR_MESSAGES.generic,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    isLoading,
    submitStatus,
    handleInputChange,
    handleSubmit,
  };
};