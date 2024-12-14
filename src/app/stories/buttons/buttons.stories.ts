import type {Meta,StoryObj} from '@storybook/angular';
import {ButtonsComponent} from './buttons.component';

export default {
  title:'Components/Buttons',
  component:ButtonsComponent,
  tags:['autodocs'],
  argTypes:{
    label: {control:'text'},
    type: {control:'select',options:['default','neutral','primary','secondary','accent','ghost','link']},
    size: {control:'select',options:['small','medium','large']},
    disabled: {control:'boolean'},
    outline: {control:'boolean'},
    loading: {control:'boolean'},
    loadingText: {control:'text'},
  }
} as Meta<ButtonsComponent>


type ButtonsComponentStory = StoryObj<ButtonsComponent>;
export const Default:ButtonsComponentStory = {
  args:{
    type:'default',
    size:'medium',
    disabled:false,
    label:'Default'
  }
}

export const Neutral:ButtonsComponentStory = {
  args:{
    type:'neutral',
    size:'medium',
    disabled:false,
    label:'Neutral'
  }
}

export const Primary:ButtonsComponentStory = {
  args:{
    type:'primary',
    size:'medium',
    disabled:false,
    label:'Primary'
  }
}

export const Secondary:ButtonsComponentStory = {
  args:{
    type:'secondary',
    size:'medium',
    disabled:false,
    label:'Secondary'
  }
}
export const Accent:ButtonsComponentStory = {
  args:{
    type:'accent',
    size:'medium',
    disabled:false,
    label:'Accent'
  }
}
export const Ghost:ButtonsComponentStory = {
  args:{
    type:'ghost',
    size:'medium',
    disabled:false,
    label:'Ghost'
  }
}
export const Link:ButtonsComponentStory= {
  args:{
    type:'link',
    size:'medium',
    disabled:false,
    label:'Link'
  }
}
