import Chat from 'components/Chat';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  conversations: state.entities.chat.conversations
});

export default connect(mapStateToProps)(Chat);
