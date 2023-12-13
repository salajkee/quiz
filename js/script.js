// Quiz Range Slider
const sliderSum = document.querySelector('.quiz__slider-sum')
const sliderTerm = document.querySelector('.quiz__slider-term')
const sliderSumSum = sliderSum.querySelector('.quiz__slider-bot-sum')
const sliderSumInput = sliderSum.querySelector('.quiz__slider-range-input')
const sliderTermSum = sliderTerm.querySelector('.quiz__slider-bot-sum')
const sliderTermInput = sliderTerm.querySelector('.quiz__slider-range-input')

function rangeSlider(sliderInput, sliderSum) {
	const sum = Number(sliderInput.value).toLocaleString()
	sliderSum.value = sum

	sliderSum.addEventListener('input', e => {
		e.target.value = e.target.value.toLocaleString()
	})

	sliderInput.addEventListener('input', e => {
		sliderSum.value = Number(e.target.value).toLocaleString()
	})
}

rangeSlider(sliderSumInput, sliderSumSum)
rangeSlider(sliderTermInput, sliderTermSum)

// Quiz Steps
const quizStep = document.querySelectorAll('.quiz__step')
const nextBtn = document.querySelector('.quiz__btn')
const quizStepsItem = document.querySelectorAll('.quiz__steps-item')

let currentStep = 0

nextBtn.addEventListener('click', () => {
	currentStep++

	quizStep.forEach(item => {
		if (item.classList.contains('quiz__step--active')) {
			item.classList.remove('quiz__step--active')
		}
	})

	quizStepsItem.forEach(item => {
		if (item.classList.contains('quiz__steps-item--active')) {
			item.classList.remove('quiz__steps-item--active')
			item.classList.add('quiz__steps-item--done')
		}
	})

	quizStep[currentStep].classList.add('quiz__step--active')
	quizStepsItem[currentStep].classList.add('quiz__steps-item--active')
})
