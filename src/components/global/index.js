import UButton from './UButton.vue';

const components = [
	{name: 'UButton', component: UButton},
]

export default {
	install(app) {
		components.forEach(({ name, component }) => {
			app.component(name, component)
		})
	}
}