export const validateFullName = (name: string): string | undefined => {
  if (!name.trim()) {
    return 'Full name is required';
  }
  if (name.trim().length < 3) {
    return 'Full name must be at least 3 characters';
  }
  return undefined;
};

export const validateEmail = (email: string): string | undefined => {
  if (!email.trim()) {
    return 'Email address is required';
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return 'Please enter a valid email address';
  }
  return undefined;
};

export const validatePhone = (phone: string): string | undefined => {
  if (!phone.trim()) {
    return 'Phone number is required';
  }
  const cleanPhone = phone.replace(/[\s()-]/g, '');
  if (!/^\+[1-9]\d{8,14}$/.test(cleanPhone)) {
    return 'Please enter a valid phone number with country code';
  }
  return undefined;
};
