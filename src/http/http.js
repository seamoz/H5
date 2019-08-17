import axios from 'axios'
import QS from 'qs'

//请求超时时间
axios.defaults.timeout = 30000;

// token
// axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
// Axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// application/x-www-form-urlencoded
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

//保证浏览器的sessionId一致
axios.defaults.withCredentials = true;

//设置请求地址
axios.defaults.baseURL = 'http://192.168.3.162:8081';

// 拦截器
// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
	// config.headers.post = {"Content-Type":"application/json"}
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
const get = (url, params) => {
	return new Promise((resolve, reject) => {
		axios.get(url, {
				params: params
			})
			.then(res => {
				resolve(res.data);
			})
			.catch(err => {
				reject(err.data)
			})
	});
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
/*const post = (url, params) => {
	return new Promise((resolve, reject) => {
		axios.post(url, QS.stringify(params))
			.then(res => {
				resolve(res.data);
			})
			.catch(err => {
				reject(err.data);
			})
	});
}*/

const post = (url, params) => {
	return new Promise((resolve, reject) => {
		axios.post(url, params)
			.then(res => {
				resolve(res.data);
			})
			.catch(err => {
				reject(err.data);
			})
	});
}

export default {
	post,
	get
}
