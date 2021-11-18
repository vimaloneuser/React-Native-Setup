import Message from './messageUtils';

let constraints = {
    name: {
        presence: {
            message: Message.Errors.nameBlank
        },
        length: {
            maximum: 30,
            tooLong: Message.Errors.nameLength
        },
        format: {
            pattern: /^[a-zA-Z\s]*$/,
            message: Message.Errors.nameInvalid,
        }
    },
    city: {
        presence: {
            message: Message.Errors.cityBlank
        },
        length: {
            maximum: 30,
            tooLong: Message.Errors.cityLength
        },
        format: {
            pattern: /^[a-zA-Z\s]*$/,
            message: Message.Errors.cityInvalid,
        }
    },
    email: {
        presence: {
            message: Message.Errors.emailBlank
        },
        format: {
            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            message: Message.Errors.emailValidity,
        }
    },
    password: {
        presence: {
            message: Message.Errors.pwdBlank
        },
        length: {
            minimum: 6,
            message: Message.Errors.pwdLengthMinimum,
        }
    },
    passwordBlank: {
        presence: {
            message: Message.Errors.pwdBlank
        }
    },
    phoneNo: {
        presence: {
            message: Message.Errors.phoneBlank
        },
        numericality: {
            notValid: Message.Errors.phoneInvalid
        },
        format: {
            pattern: /^[0]?[789]\d{9}$/,
            message: Message.Errors.phoneInvalid,
        },
        length: {
            maximum: 10,
            tooLong: Message.Errors.phoneTooLong,
            tooShort: Message.Errors.phoneTooShort
        },
    },
    age: {
        presence: {
            message: Message.Errors.ageBlank
        },
        numericality: {
            onlyInteger: true,
            strict: true,
            lessThanOrEqualTo: 100,
            greaterThanOrEqualTo: 5,
            notGreaterThanOrEqualTo: Message.Errors.ageLess,
            notLessThanOrEqualTo: Message.Errors.ageGrater,
            notValid: Message.Errors.ageInvalid,
            notInteger: Message.Errors.ageInvalid,
        }
    },
    couponCode: {
        presence: {
            message: Message.Errors.couponCodeBlank
        },
    },
    comment: {
        presence: {
            message: Message.Errors.commentBlank
        },
    },
    flagComment: {
        presence: {
            message: Message.Errors.flagCommentBlank
        },
    },
    countryCode: {
        presence: {
            message: Message.Errors.countryCodeBlank
        },
    },
    playListName: {
        presence: {
            message: Message.Errors.playListNameBlank
        }
    },
};
