import { connect } from 'react-redux';
import { createPost } from '../../../actions/post_actions';
import TextPostForm from './text_post_form';
import { closeModal } from '../../../actions/ui/modal_actions';

const msp = (state) => {

  const currentUser = state.entities.users[state.session.id];
  return ({
    post: { title: "", body: "", post_type: "quote", author_id: currentUser.id },

    formType: "Post",
    currentUser: currentUser
  });
};

const mdp = (dispatch) => {
  return ({
    action: (post) => dispatch(createPost(post)),
    closeModal: () => dispatch(closeModal())
  });
};

export default connect(msp, mdp)(TextPostForm);