const goods = [
	{ title: 'ELLERY X M\'O CAPSULE 1', price: 300 },
	{ title: 'ELLERY X M\'O CAPSULE 2', price: 250 },
	{ title: 'ELLERY X M\'O CAPSULE 3', price: 200 },
	{ title: 'ELLERY X M\'O CAPSULE 4', price: 150 },
	{ title: 'ELLERY X M\'O CAPSULE 5', price: 100 },
	{ title: 'ELLERY X M\'O CAPSULE 6', price: 50 },
]

class GoodsItem {
	constructor(title, price) {
		this.title = title
		this.price = price
	}

	render() {
		return `<article class="catalog-items__card card goods-item">
            <div class="card__image-wrapper">
              <img class="card__image" src="./images/catalog-items-1.webp" alt="" />
              <button class="card__add">Add to Cart</button>
            </div>
            <div class="card__content">
              <h3 class="card__title">${this.title}</h3>
              <p class="card__description">
                Known for her sculptural takes on traditional tailoring,
                Australian arbiter of cool Kym Ellery teams up with Moda
                Operandi.
              </p>
              <p class="card__price text text--pink">$${this.price}</p>
            </div>
          </article>`
	}
}

class GoodsList {
	constructor() {
		this.goods = []
	}

	fetchGoods() {
		this.goods = [
			{ title: 'ELLERY X M\'O CAPSULE 1', price: 300 },
			{ title: 'ELLERY X M\'O CAPSULE 2', price: 250 },
			{ title: 'ELLERY X M\'O CAPSULE 3', price: 200 },
			{ title: 'ELLERY X M\'O CAPSULE 4', price: 150 },
			{ title: 'ELLERY X M\'O CAPSULE 5', price: 100 },
			{ title: 'ELLERY X M\'O CAPSULE 6', price: 50 },
		]
	}

	render() {
		const goodsListElement = document.querySelector('.goods-list')
		if (goodsListElement) {
			let listHtml = ''
			this.goods.forEach(good => {
				const goodItem = new GoodsItem(good.title, good.price)
				listHtml += goodItem.render()
			})
			goodsListElement.innerHTML = listHtml
		} else {
			console.error('Error: .goods-list element not found in the DOM.')
		}
	}
}

const list = new GoodsList()
list.fetchGoods()
list.render()