class Data {
    constructor(success, message, data) {
        this.success = success;
        this.message = message;
        this.data = data;
    }

    get getSuccess() {
        return this.success;
    }

    set setSuccess(success) {
        this.success = success;
    }

    get getMessage() {
        return this.message;
    }

    set setMessage(message) {
        this.message = message;
    }

    get getData() {
        return this.data;
    }

    set setData(data) {
        this.data = data;
    }
}

module.exports = Data;