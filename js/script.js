const goods = [
	{ title: 'Shirt', price: 250 },
	{ title: 'Socks', price: 200 },
	{ title: 'Jacket', price: 150 },
	{ title: 'Shoes', price: 100 }
]

const renderGoodsItem = (title, price) => {
	return `<div class="goods-item"><h3>$(title)</h3><p>$(price)</p></div>`
}

const renderGoodsList = (list) => {
	let goodsList = list.map(item => renderGoodsItem(item.title, item.price))
	document.querySelector('.goods-list').innerHTML = goodsList
}

renderGoodsList(goods)

class GoodsItem {
	constructor(title, price) {
		this.title = title
		this.price = price
	}
	render() {
		return `<div class="goods-item"><h3>$(this.title)</h3><p>$(this.price)</p></div>`
	}
}

class GoodsList {
	constructor() {
		this.goods = []
	}
	fetchGoods() {
		this.goods = [
			{ title: 'Shirt', price: 250 },
			{ title: 'Socks', price: 200 },
			{ title: 'Jacket', price: 150 },
			{ title: 'Shoes', price: 100 },
		]
	}
	render() {
		let listHtml = ''
		this.goods.forEach(good => {
			const goodItem = new GoodsItem(good.title, good.price)
			listHtml += goodItem.render()
		})
		document.querySelector('.goods-list').innerHTML = listHtml
	}
}

const list = new GoodsList()
list.fetchGoods()
list.render()