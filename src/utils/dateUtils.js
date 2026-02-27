// utility functions for date calculations and status determination

export function calculateStatus(expiryDate) {
  const now = new Date();
  const exp = new Date(expiryDate);

  if (exp < now) return 'Expired';

  const diffDays = Math.ceil((exp - now) / (1000 * 60 * 60 * 24));
  if (diffDays <= 30) return 'Expiring Soon';
  return 'Valid';
}

export function daysUntil(expiryDate) {
  const now = new Date();
  const exp = new Date(expiryDate);
  const diff = exp - now;
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}
