export const ApiEndpoints = {
    Auth: {
      Login: '/Auth/login',
      VerifyOTP : '/Auth/verify-otp'
    },
    ApiEndpoints : {
        // Customer related endpoints
        GetCustomers : '/Customers/GetCustomers',
        AddOrUpdateCustomer : '/Customers/AddOrUpdateCustomer',
        DeleteCustomer : '/Customers/DeleteCustomer',
      
        // DeliveryBoy related endpoints
        GetDeliveryBoys : '/DeliveryBoy/GetDeliveryBoys',
        AddOrUpdateDeliveryBoy : '/DeliveryBoy/AddOrUpdateDeliveryBoy',
        DeleteDeliveryBoy : '/DeliveryBoy/DeleteDeliveryBoy',
      
        // Products related endpoints
        GetProducts : '/Products/getProducts'
      }
      
};
  