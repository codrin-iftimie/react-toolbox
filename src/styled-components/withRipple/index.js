import withRippleFactory from '../../core/hoc/withRipple/withRipple';
import RippleNode from './RippleNode';
import RippleWrapper from './RippleWrapper';

export default withRippleFactory({
  passthrough: ['overrides'],
  RippleNode,
  RippleWrapper,
});