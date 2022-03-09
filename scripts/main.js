const viewsContainer = document.querySelector(".pricing-card__views");
const costContainer = document.querySelector(".pricing-card__price");
const rangeInput = document.querySelector(".pricing-card__views-range");
const priceFreqContainer = document.querySelector(".pricing-card__billing-frequency");
const frequencyToggle = document.querySelector("#billing-freq");
const form = document.querySelector(".pricing-card");

// Data & Global Variables
const VIEWS_DATA = [
    {
        pageViews: '10k',
        monthlyCost: 8,
        leftPercentage: 0
    },
    {
        pageViews: '50k',
        monthlyCost: 12,
        leftPercentage: 25
    },
    {
        pageViews: '100k',
        monthlyCost: 16,
        leftPercentage: 50
    },
    {
        pageViews: '500k',
        monthlyCost: 24,
        leftPercentage: 75
    },
    {
        pageViews: '1M',
        monthlyCost: 36,
        leftPercentage: 100
    },
]

const start = ()=>{
    var i = rangeInput.value - 1
    var classDoc = new writeDocument(VIEWS_DATA[i].pageViews,VIEWS_DATA[i].monthlyCost,VIEWS_DATA[i].leftPercentage)
    frequencyToggle.classList.contains('year') ? classDoc.Year() : classDoc.Month()
}

rangeInput.addEventListener('input',()=>{
    start()
})


frequencyToggle.addEventListener('input',e=>{
    e.target.classList.toggle('year')    
    start()
})

class writeDocument {
    constructor(pageViews,monthlyCost,leftPercentage){
        this.pageViews = pageViews,
        this.monthlyCost = monthlyCost,
        this.leftPercentage = leftPercentage
    }
    Month(){
        form.setAttribute('style',`--left:${this.leftPercentage}`)
        costContainer.innerText = '$'+this.monthlyCost+'.00'
        viewsContainer.innerText = this.pageViews + ' '+'PAGEVIEWS'
        priceFreqContainer.innerText = '/ month'

    }
    Year(){
        form.setAttribute('style',`--left:${this.leftPercentage}`)
        viewsContainer.innerText = this.pageViews + ' '+'PAGEVIEWS'
        costContainer.innerText = '$'+(this.monthlyCost*12-((this.monthlyCost*12)*25/100))+'.00'
        priceFreqContainer.innerText = '/ year'

    }
}

start()
