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

// Mal ejemplo del patrón Creator (acoplamiento fuerte)
export class CarritoCompra {
	private items: Item[] = [];

	// Aquí la clase CarritoCompra asume la responsabilidad de crear
	// las instancias de Item directamente usando "new".
	// Esto la deja fuertemente acoplada a la implementación de Item.
	addItem(productId: string, name: string, price: number, quantity = 1) {
		const item = new Item(productId, name, price, quantity); // creación directa
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
export function runAntesDemo() {
	const carrito = new CarritoCompra();
	carrito.addItem('p1', 'Zapatos', 50, 2);
	carrito.addItem('p2', 'Remera', 20, 1);
	console.log('Antes - items:', carrito.listar());
	console.log('Antes - total:', carrito.total());
}

// Exportada para ser invocada desde `index.ts`

