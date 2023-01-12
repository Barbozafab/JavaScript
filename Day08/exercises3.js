console.log("========== LEVEL 3 ==========");

// 1.
const personAccount = {
    firstName: "Paula",
    lastName: "Plumbkin",
    incomes: [[10_000, 'one'], [20_000, 'two'], [30_000, 'three']],
    expenses: [[5_000, 'one'], [10_000, 'two'], [15_000, 'three']],
    totalIncome: function() {
        let sum = 0;

        for (const element of this.incomes) {
            sum += element[0];
        }

        return sum;
    },
    
    totalExpense: function() {
        let sum = 0;

        for (const element of this.expenses) {
            sum += element[0];
        }

        return sum;
    },
    accountInfo: function() {
        return Object.entries(this);
    },
    addIncome: function(income, description) {
        this.incomes.push([income, description]);
    },
    addExpense: function(expense, description) {
        this.expenses.push([expense, description]);
    },
    accountBalance: function() {
        let balance = 0;

        for (const element of this.incomes) {
            balance += element[0];
        }

        for (const element of this.expenses) {
            balance -= element[0];
        }

        return balance;
    }
}

// 2.
const _users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];

function signUp(user) {
    for (const element of _users) {
        if (element._id === user._id) {
            console.log("User already has an account.");
            return;
        }
    }

    _users.push(user);
}

function signIn(user) {
    for (const element of _users) {
        if (element._id === user._id) {
            if (user.isLoggedIn === true) {
                console.log("User already logged in.");
            } else {
                user.isLoggedIn = true;
                return;
            }
        }
    }

    console.log("User not found.");
}

// 3.
const _products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
];

function rateProduct(productId, _userId, _rate) {
    for (const product of _products) {
        if (product._id === productId) {
            product.ratings.push({userId: _userId, rate: _rate});
            return;
        }
    }
}

function averageRating(productId) {
    for (const product of _products) {
        if (product._id === productId) {
            let average = 0;

            for (const rating of product.ratings) {
                average += rating.rate;
            }

            return average / product.ratings.length;
        }
    }
}

// 4.
function likeProduct(productId, _userId) {
    for (const product of _products) {
        if (product._id === productId) {
            if (product.likes.includes(_userId)) {
                product.likes.splice(product.likes.indexOf(_userId), 1);
            } else {
                product.likes.push(_userId);
            }
        }
    }
}
