import Sample from 'stories/RedTextSample/Sample'
import VarSample from 'stories/RedTextSample/VarSample'
import { storiesOf } from '@storybook/react'

storiesOf('RedText', module)
	.add('Sample Text', Sample)
	.add('Variable Sample Text', VarSample)
