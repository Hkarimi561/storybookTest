import type {Meta,StoryObj} from '@storybook/angular';
import {CardsComponent} from './cards.component';

export default {
  title:'Components/Cards',
  component:CardsComponent,
  tags:['autodocs'],
  argTypes:{
    imgSrc: {control:'text'},
    imgAlt: {control:'text'},
    header: {control:'text'},
    content: {control:'text'},
    btnLabel: {control:'text'},
  }
} as Meta<CardsComponent>
type CardsComponentStory = StoryObj<CardsComponent>;

export const Default:CardsComponentStory = {
  args:{
    imgSrc:"https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
    imgAlt:'SpiderMan',
    header:'SpiderMan',
    content:'Home Alone',
    btnLabel:'Watch Now'
  }
}
