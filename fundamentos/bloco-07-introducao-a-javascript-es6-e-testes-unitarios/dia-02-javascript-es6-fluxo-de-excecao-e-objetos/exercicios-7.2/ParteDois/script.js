const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
        street: 'Rua das Flores',
        number: '389',
        apartment: '701',
    },
    order: {
        pizza: {
            marguerita: {
                amount: 1,
                price: 25,
            },
            pepperoni: {
                amount: 1,
                price: 20,
            }
        },
        drinks: {
            coke: {
                type: 'Coca-Cola Zero',
                price: 10,
                amount: 1,
            }
        },
        delivery: {
            deliveryPerson: 'Ana Silveira',
            price: 5,
        }
    },
    payment: {
        total: 60,
    },
};

const customerInfo = (order) => {
    const deliveryPerson = order['order'].delivery['deliveryPerson'];
    const name = order['name'];
    const tel = order['phoneNumber'];
    const address = order['address'];
    const street = address.street;
    const num = address.number;
    const ap = address.apartment;

    console.log(`Olá ${deliveryPerson}, entrega para ${name}, Telefone: ${tel}, R. ${street}, Nº:${num}, AP:${ap}`);
}
customerInfo(order);

