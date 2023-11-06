interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Individual Customer'],
  tenantRoles: [
    'Business Owner',
    'Store Manager',
    'Store Employee',
    'Customer Service Representative',
    'Admin',
    'HR',
    'Accounts',
    'Banking',
  ],
  tenantName: 'Company',
  applicationName: 'Construction tool rental',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage personal information',
    'View tool information',
    'Create and manage rentals',
    'Make payments',
  ],
  ownerAbilities: [
    'Manage user information',
    'Manage company details',
    'Manage store operations',
    'Manage rental and payment transactions',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/865beb02-706d-459b-8d7c-471519e7f3f9',
};
