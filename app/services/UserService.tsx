// import axios from 'axios';

// class UserService {
//   baseURL: any;
//   constructor(baseURL: any) {
//     this.baseURL = baseURL;
//   }

//   async login(email: any, password: any) {
//     try {
//       const response = await axios.post(`${this.baseURL}/login`, { email, password });
//       return response.data;
//     } catch (error) {
//       throw error.response.data;
//     }
//   }

//   async register(name: any, email: any, password: any) {
//     try {
//       const response = await axios.post(`${this.baseURL}/register`, { name, email, password });
//       return response.data;
//     } catch (error) {
//       throw error.response.data;
//     }
//   }

//   async forgotPassword(email: any) {
//     try {
//       const response = await axios.post(`${this.baseURL}/forgot-password`, { email });
//       return response.data;
//     } catch (error) {
//       throw error.response.data;
//     }
//   }
// }

// export default UserService;
