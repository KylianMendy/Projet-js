
console.log('test')

document.addEventListener("DOMContentLoaded", function(){
	
	// Model qui permet de récupérer la data
	class Model {

		constructor() {
			this.data = [
				{
					title: 'Homepage',
					url: '/homepage',
					background: 'red',
          public: true,
          message:'Welcome to an other one'
				},
				{
          title: 'Contact',
					url: '/contact',
          background: 'green',
          mail:'model.js@gmail.com',
          location: 'Paris',
          article:'article 1',
          article:'article 2',
          article:'article 3',
          article:'article 4',
          public: false,
        },
        {
          title: 'Product',
          url:'/product',
          background:'blue',
          article:'article 8',
          message:'Choose your favorite',
          public:true,
      }
			]
		}

		getPageByUrl(url) {
			return this.data.find(page => page.url === url)
		}
	}

	// View qui permet de modifier le template html
	class View {
		constructor() {
			this.container = document.querySelector('.container')
		}

		changeBackground(option) {
			this.container.style.background = option.background
		}

		changeTitle(option) {
			this.container.innerHTML = option.title
    }
    
    changeMessage(option){
      this.container.innerHTML = option.message
    }

    changeArticle(option){
      this.container.innerHTML = option.article
    }
	}

	// Controller qui permet de gérer l'ensemble de l'application
	function controller() {
		const currentUrl = '/product'
		const data = new Model()

		const currentPage = data.getPageByUrl(currentUrl)

		const render = new View()
		render.changeBackground(currentPage)
    render.changeTitle(currentPage)
    render.changeMessage(currentPage)
    render.changeArticle(currentPage)
	}

	controller()

})