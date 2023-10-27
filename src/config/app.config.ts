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
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Inventory Manager'],
  tenantName: 'Business',
  applicationName: 'Inventory Management System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read product information', 'Create orders', 'Read order status', 'Update personal information'],
  ownerAbilities: ['Manage users', 'Manage businesses', 'Manage products', 'Manage orders'],
  getQuoteUrl: 'https://app.roq.ai/proposal/e243d0b2-71d6-4554-9b74-50e6345ed98e',
};
