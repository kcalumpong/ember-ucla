import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AboutController extends Controller {
    @action
    scrollToTop() {
        window.scrollTo(0, 0);
    }
}
