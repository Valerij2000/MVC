// model

const model = {

    addNamePrefix: function(data) {
        let string = 'Data: ';
        data = string + data;
        view.showData(data);
    },

}

// view

const view = {

    showData: function(data) {
        document.querySelector('#outer').innerHTML = data;
    },

}

// controller

const controller = {

    handleDataString: function (value) {
        const validateCode = this.validateEmpty(value);
        model.addNamePrefix(validateCode);
    },

    validateEmpty: function(value) {
        if (value == '' || value === null) {
            return 'Is not blank!';
        } else {
            return value;
        }
    },

}

// init object

function initMainObject() {
    const app = {

        init: function() {
            this.main();
            this.event();
        },

        main: function() {
            // links anythink plugins
        },

        event: function() {
            const button = document.querySelector('#button');
            const input = document.querySelector('#input');
            button.addEventListener('click', () => {
                controller.handleDataString(input.value);
            });
        },

    };

    app.init();

} initMainObject();