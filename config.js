import { configure } from '@storybook/react'

function loadStories () {
	require('stories/RedTextSample')
}

configure(loadStories, module)
