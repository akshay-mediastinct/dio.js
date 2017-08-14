var requestAnimationFrame = window.requestAnimationFrame || setTimeout
var document = window.document || noop
var Node = window.Node || noop
var Symbol = window.Symbol || noop
var Promise = window.Promise || noop
var WeakMap = window.WeakMap || Hash
var Iterator = Symbol.iterator

var ElementPromise = -3
var ElementPortal = -2
var ElementFragment = -1
var ElementComponent = 0
var ElementNode = 1
var ElementText = 2

var PriorityLow = -2
var PriorityTask = -1
var PriorityHigh = 1

var LifecycleCallback = 'callback'
var LifecycleRender = 'render'
var LifecycleConstructor = 'constructor'
var LifecycleWillMount = 'componentWillMount'
var LifecycleDidMount = 'componentDidMount'
var LifecycleWillReceiveProps = 'componentWillReceiveProps'
var LifecycleShouldUpdate = 'shouldComponentUpdate'
var LifecycleWillUpdate = 'componentWillUpdate'
var LifecycleDidUpdate = 'componentDidUpdate'
var LifecycleWillUnmount = 'componentWillUnmount'
var LifecycleDidCatch = 'componentDidCatch'
var LifecycleChildContext = 'getChildContext'
var LifecycleInitialState = 'getInitialState'

var NSMathML = 'http://www.w3.org/1998/Math/MathML'
var NSXlink = 'http://www.w3.org/1999/xlink'
var NSSVG = 'http://www.w3.org/2000/svg'

var TypeFragment = '#Fragment'
var TypeText = '#Text'
