import UButton from './UButton.vue';
import MVideo from './MVideo.vue';
import MPicture from './MPicture.vue';

const components = [
	{name: 'UButton', component: UButton},
	{name: 'MVideo', component: MVideo},
	{name: 'MPicture', component: MPicture},
]

export default {
	install(app) {
		components.forEach(({ name, component }) => {
			app.component(name, component)
		})
	}
}