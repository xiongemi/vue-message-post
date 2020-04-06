import { shallowMount } from '@vue/test-utils';
import MessagePost from '@/components/MessagePost.vue';

describe('MessagePost.vue', () => {
  let wrapper;

  describe('author post', () => {
    beforeEach(() => {
      const message = {
        name: 'Brad',
        profile: 'logo.png',
        isAuthor: true,
        timeStamp: '2020-04-02T03:40:50.773Z',
        message:
          'Vue does not support IE8 and below, because it uses ECMAScript 5 features that are un-shimmable in IE8.',
        counts: {
          replies: 123,
          likes: 234,
          dislikes: 123
        }
      };
      wrapper = shallowMount(MessagePost, {
        propsData: message
      });
    });

    it('renders img', () => {
      expect(wrapper.element.querySelector('img')).toBeTruthy();
    });

    it('should show AUTHOR', () => {
      expect(wrapper.text().includes('AUTHOR')).toBeTruthy();
    });
  });

  describe('non-author post', () => {
    beforeEach(() => {
      const message = {
        name: 'Brad',
        profile: 'logo.png',
        isAuthor: false,
        timeStamp: '2020-04-02T03:40:50.773Z',
        message:
          'Vue does not support IE8 and below, because it uses ECMAScript 5 features that are un-shimmable in IE8.',
        counts: {
          replies: 123,
          likes: 234,
          dislikes: 123
        }
      };
      wrapper = shallowMount(MessagePost, {
        propsData: message
      });
    });

    it('should not show AUTHOR', () => {
      expect(wrapper.text().includes('AUTHOR')).toBeFalsy();
    });
  });
});
