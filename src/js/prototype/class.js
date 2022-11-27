// 思想：1)封装 2）继承 3）多态
// 属性
// 方法
// 单例模式
class Animal {
    // 构造函数
    constructor(name, color) {
        // 对象初始化调用
        this.name = name;
        this.color = color
    }

    sing() {
        console.log('哈哈哈')
    }
}

class Dog extends Animal {
    constructor(name, age, height) {
        super(name, age)
        this.height = height
    }
}


const dog = new Dog('pjw', 20, '10米')
dog.sing()
console.log(dog)



class Config {
    // 静态变量
    static info = 1
    // 静态方法
    // static getSomeInfo() {
    //     console.log(this.info)
    //     console.log('这是静态方法')
    // }

    // 单例模式
    static config = null;

    // 私有属性
    #config = 1;

    // get/set方法
    getConfig() {
        return this.#config
    }

    setConfig(config) {
        this.#config = config
    }

    static getSingleConfig() {
        // 返回一个Config对象的实例
        if (!this.config) {
            this.config = new Config();
        }
        return this.config
    }

    // 构造函数无法私有化
    constructor() {
        // 私有属性和公开属性
        this.name = 'pjw';
        this.age = 'test'
    }

    changeName(name) {
        console.log(this.#config, 'this.config')
        this.name = name
    }
}

// 只能被创建一次
// const config = new Config()
// Config.getSomeInfo()

// 单例模式
const config = Config.getSingleConfig()
console.log(config)
config.changeName('it')
const config2 = Config.getSingleConfig();
config2.name = 111;
config2.setConfig('12478')
console.log(config2.getConfig())
