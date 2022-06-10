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

const orderModifier = (order) => {
    const novoNome = order['name'] = 'Luiz Silva';
    const novoTotal = order['payment'] = 50;
    const pizzas = Object.keys(order.order.pizza);
    const drink = order['order'].drinks['coke'].type;

    console.log(`Olá ${novoNome}, o total do seu pedido de ${pizzas} e ${drink} é de R$ ${novoTotal},00.`);
  }
  
  orderModifier(order);