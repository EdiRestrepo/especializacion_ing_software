// empty
export class Item {
	constructor(
		public productId: string,
		public name: string,
		public price: number,
		public quantity: number = 1
	) {}

	subtotal(): number {
		return this.price * this.quantity;
	}
}

// Fábrica simple para crear Items (desacopla la creación)
export interface ItemFactory {
	create(productId: string, name: string, price: number, quantity?: number): Item;
}

export class DefaultItemFactory implements ItemFactory {
	create(productId: string, name: string, price: number, quantity = 1): Item {
		return new Item(productId, name, price, quantity);
	}
}

// Carrito que delega la creación de Items a una fábrica (mejor práctica)
export class CarritoCompraRefactor {
	private items: Item[] = [];

	constructor(private factory: ItemFactory) {}

	addItem(productId: string, name: string, price: number, quantity = 1) {
		// La clase no conoce cómo se construye un Item, sólo pide la fábrica
		const item = this.factory.create(productId, name, price, quantity);
		this.items.push(item);
	}

	total(): number {
		return this.items.reduce((s, it) => s + it.subtotal(), 0);
	}

	listar(): Item[] {
		return this.items.slice();
	}
}

// Uso de ejemplo
export function runDespuesDemo() {
	const factory = new DefaultItemFactory();
	const carrito = new CarritoCompraRefactor(factory);
	carrito.addItem('p1', 'Zapatos', 50, 2);
	carrito.addItem('p2', 'Remera', 20, 1);
	console.log('Despues - items:', carrito.listar());
	console.log('Despues - total:', carrito.total());
}

// Exportada para ser invocada desde `indexRefactor.ts`

