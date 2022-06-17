import Mock from "mockjs";
//使用Mock下面提供的mock方法进行需要模拟数据的封装
//参数1，是需要拦截的完整请求地址，参数2，是请求方式，参数3，是请求的模拟数据
const baseUrl = 'http://localhost:8080/';
const testData = Mock.mock(baseUrl + 'test', 'get', {
    status: 200, //请求成功状态码
    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], //模拟的请求数据
    msg: '请求成功！'
})
const testLogin = Mock.mock(baseUrl + 'login', 'get', {
    status: 200,
    data: {
        token: "@guid"
    }
})
const getBanner = Mock.mock(baseUrl + 'getBanner', 'get', {
    status: 200,
    data: [{
        id: 'a1',
        title: '这是第一条数据',
        image: '/banner/swiper_2.png'
    }, {
        id: 'a2',
        title: '这是第二条数据',
        image: '/banner/swiper_3.png'
    }, {
        id: 'a3',
        title: '这是第三条数据',
        image: '/banner/swiper_4.png'
    }, {
        id: 'a4',
        title: '这是第四条数据',
        image: '/banner/swiper_2.png'
    }]
})

//导出
export default {testData, testLogin,getBanner};
