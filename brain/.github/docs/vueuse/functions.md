# VueUse Functions

## State

- **createGlobalState** - Keep states in the global scope to be reusable across Vue instances
- **createInjectionState** - Create global state that can be injected into components
- **createSharedComposable** - Make a composable function usable with multiple Vue instances
- **injectLocal** - Extended inject with ability to call provideLocal to provide the value in the same component
- **provideLocal** - Extended provide with ability to call injectLocal to obtain the value in the same component
- **useAsyncState** - Reactive async state
- **useDebouncedRefHistory** - Shorthand for useRefHistory with debounced filter
- **useLastChanged** - Records the timestamp of the last change
- **useLocalStorage** - Reactive LocalStorage
- **useManualRefHistory** - Manually track the change history of a ref when the using calls commit()
- **useRefHistory** - Track the change history of a ref
- **useSessionStorage** - Reactive SessionStorage
- **useStorage** - Create a reactive ref that can be used to access & modify LocalStorage or SessionStorage
- **useStorageAsync** - Reactive Storage in with async support
- **useThrottledRefHistory** - Shorthand for useRefHistory with throttled filter

## Elements

- **useActiveElement** - Reactive document.activeElement
- **useDocumentVisibility** - Reactively track document.visibilityState
- **useDraggable** - Make elements draggable
- **useDropZone** - Create a zone where files can be dropped
- **useElementBounding** - Reactive bounding box of an HTML element
- **useElementSize** - Reactive size of an HTML element
- **useElementVisibility** - Tracks the visibility of an element within the viewport
- **useIntersectionObserver** - Detects that a target element's visibility
- **useMouseInElement** - Reactive mouse position related to an element
- **useMutationObserver** - Watch for changes being made to the DOM tree
- **useParentElement** - Get parent element of the given element
- **useResizeObserver** - Reports changes to the dimensions of an Element's content or the border-box
- **useWindowFocus** - Reactively track window focus with window.onfocus and window.onblur events
- **useWindowScroll** - Reactive window scroll
- **useWindowSize** - Reactive window size

## Browser

- **useBluetooth** - Reactive Web Bluetooth API
- **useBreakpoints** - Reactive viewport breakpoints
- **useBroadcastChannel** - Reactive BroadcastChannel API
- **useBrowserLocation** - Reactive browser location
- **useClipboard** - Reactive Clipboard API
- **useClipboardItems** - Reactive Clipboard API
- **useColorMode** - Reactive color mode (dark / light / customs) with auto data persistence
- **useCssVar** - Manipulate CSS variables
- **useDark** - Reactive dark mode with auto data persistence
- **useEventListener** - Use EventListener with ease
- **useEyeDropper** - Reactive EyeDropper API
- **useFavicon** - Reactive favicon
- **useFileDialog** - Open file dialog with ease
- **useFileSystemAccess** - Create and read and write local files with FileSystemAccessAPI
- **useFullscreen** - Reactive Fullscreen API
- **useGamepad** - Provides reactive bindings for the Gamepad API
- **useImage** - Reactive load an image in the browser
- **useMediaControls** - Reactive media controls for both audio and video elements
- **useMediaQuery** - Reactive Media Query
- **useMemory** - Reactive Memory Info
- **useObjectUrl** - Reactive URL representing an object
- **usePerformanceObserver** - Observe performance metrics
- **usePermission** - Reactive Permissions API
- **usePreferredColorScheme** - Reactive prefers-color-scheme media query
- **usePreferredContrast** - Reactive prefers-contrast media query
- **usePreferredDark** - Reactive dark theme preference
- **usePreferredLanguages** - Reactive Navigator Languages
- **usePreferredReducedMotion** - Reactive prefers-reduced-motion media query
- **usePreferredReducedTransparency** - Reactive prefers-reduced-transparency media query
- **useScreenOrientation** - Reactive Screen Orientation API
- **useScreenSafeArea** - Reactive env(safe-area-inset-*)
- **useScriptTag** - Creates a script tag
- **useShare** - Reactive Web Share API
- **useSSRWidth** - Used to set a global viewport width which will be used when rendering SSR components that rely on the viewport width like useMediaQuery or useBreakpoints
- **useStyleTag** - Inject reactive style element in head
- **useTextareaAutosize** - Automatically update the height of a textarea depending on the content
- **useTextDirection** - Reactive dir of the element's text
- **useTitle** - Reactive document title
- **useUrlSearchParams** - Reactive URLSearchParams
- **useVibrate** - Reactive Vibration API
- **useWakeLock** - Reactive Screen Wake Lock API
- **useWebNotification** - Reactive Notification
- **useWebWorker** - Simple Web Workers registration and communication
- **useWebWorkerFn** - Run expensive functions without blocking the UI

## Sensors

- **onClickOutside** - Listen for clicks outside of an element
- **onElementRemoval** - Fires when the element or any element containing it is removed
- **onKeyStroke** - Listen for keyboard keystrokes
- **onLongPress** - Listen for a long press on an element
- **onStartTyping** - Fires when users start typing on non-editable elements
- **useBattery** - Reactive Battery Status API
- **useDeviceMotion** - Reactive DeviceMotionEvent
- **useDeviceOrientation** - Reactive DeviceOrientationEvent
- **useDevicePixelRatio** - Reactively track window.devicePixelRatio
- **useDevicesList** - Reactive enumerateDevices listing available input/output devices
- **useDisplayMedia** - Reactive mediaDevices.getDisplayMedia streaming
- **useElementByPoint** - Reactive element by point
- **useElementHover** - Reactive element's hover state
- **useFocus** - Reactive utility to track or set the focus state of a DOM element
- **useFocusWithin** - Reactive utility to track if an element or one of its decendants has focus
- **useFps** - Reactive FPS (frames per second)
- **useGeolocation** - Reactive Geolocation API
- **useIdle** - Tracks whether the user is being inactive
- **useInfiniteScroll** - Infinite scrolling of the element
- **useKeyModifier** - Reactive Modifier State
- **useMagicKeys** - Reactive keys pressed state
- **useMouse** - Reactive mouse position
- **useMousePressed** - Reactive mouse pressing state
- **useNavigatorLanguage** - Reactive navigator.language
- **useNetwork** - Reactive Network status
- **useOnline** - Reactive online state
- **usePageLeave** - Reactive state to show whether the mouse leaves the page
- **useParallax** - Create parallax effect easily
- **usePointer** - Reactive pointer state
- **usePointerLock** - Reactive pointer lock
- **usePointerSwipe** - Reactive swipe detection based on PointerEvents
- **useScroll** - Reactive scroll position and state
- **useScrollLock** - Lock scrolling of the element
- **useSpeechRecognition** - Reactive SpeechRecognition
- **useSpeechSynthesis** - Reactive SpeechSynthesis
- **useSwipe** - Reactive swipe detection based on TouchEvents
- **useTextSelection** - Reactively track user text selection based on Window.getSelection
- **useUserMedia** - Reactive mediaDevices.getUserMedia streaming

## Network

- **useEventSource** - An EventSource or Server-Sent-Events instance opens a persistent connection to an HTTP server
- **useFetch** - Reactive Fetch API provides the ability to abort requests
- **useWebSocket** - Reactive WebSocket client

## Animation

- **useAnimate** - Reactive Web Animations API
- **useInterval** - Reactive counter increases on every interval
- **useIntervalFn** - Wrapper for setInterval with controls
- **useNow** - Reactive current Date instance
- **useRafFn** - Call function on every requestAnimationFrame
- **useTimeout** - Update value after a given time with controls
- **useTimeoutFn** - Wrapper for setTimeout with controls
- **useTimestamp** - Reactive current timestamp
- **useTransition** - Transition between values

## Component

- **computedInject** - Combine computed and inject
- **createReusableTemplate** - Define and reuse template inside the component scope
- **createTemplatePromise** - Template as Promise
- **templateRef** - Shorthand for binding ref to template element
- **tryOnBeforeMount** - Safe onBeforeMount
- **tryOnBeforeUnmount** - Safe onBeforeUnmount
- **tryOnMounted** - Safe onMounted
- **tryOnScopeDispose** - Safe onScopeDispose
- **tryOnUnmounted** - Safe onUnmounted
- **unrefElement** - Retrieves the underlying DOM element from a Vue ref or component instance
- **useCurrentElement** - Get the DOM element of current component as a ref
- **useMounted** - Mounted state in ref
- **useTemplateRefsList** - Shorthand for binding refs to template elements and components inside v-for
- **useVirtualList** - Create virtual lists with ease
- **useVModel** - Shorthand for v-model binding
- **useVModels** - Shorthand for props v-model binding

## Watch

- **until** - Promised one-time watch for changes
- **watchArray** - Watch for an array with additions and removals
- **watchAtMost** - Watch with the number of times triggered
- **watchDebounced** - Debounced watch
- **watchDeep** - Shorthand for watching value with {deep: true}
- **watchIgnorable** - Ignorable watch
- **watchImmediate** - Shorthand for watching value with {immediate: true}
- **watchOnce** - Shorthand for watching value with { once: true }
- **watchPausable** - Pausable watch
- **watchThrottled** - Throttled watch
- **watchTriggerable** - Watch that can be triggered manually
- **watchWithFilter** - Watch with additional EventFilter control
- **whenever** - Shorthand for watching value to be truthy

## Reactivity

- **computedAsync** - Computed for async functions
- **computedEager** - Eager computed without lazy evaluation
- **computedWithControl** - Explicitly define the dependencies of computed
- **createRef** - Returns a deepRef or shallowRef depending on the deep param
- **extendRef** - Add extra attributes to Ref
- **reactify** - Converts plain functions into reactive functions
- **reactifyObject** - Apply reactify to an object
- **reactiveComputed** - Computed reactive object
- **reactiveOmit** - Reactively omit fields from a reactive object
- **reactivePick** - Reactively pick fields from a reactive object
- **refAutoReset** - A ref which will be reset to the default value after some time
- **refDebounced** - Debounce execution of a ref value
- **refDefault** - Apply default value to a ref
- **refThrottled** - Throttle changing of a ref value
- **refWithControl** - Fine-grained controls over ref and its reactivity
- **syncRef** - Two-way refs synchronization
- **syncRefs** - Keep target refs in sync with a source ref
- **toReactive** - Converts ref to reactive
- **toRef** - Normalize value/ref/getter to ref or computed
- **toRefs** - Extended toRefs that also accepts refs of an object
- **toValue** - Get the value of value/ref/getter

## Array

- **useArrayDifference** - Reactive get array difference of two arrays
- **useArrayEvery** - Reactive Array.every
- **useArrayFilter** - Reactive Array.filter
- **useArrayFind** - Reactive Array.find
- **useArrayFindIndex** - Reactive Array.findIndex
- **useArrayFindLast** - Reactive Array.findLast
- **useArrayIncludes** - Reactive Array.includes
- **useArrayJoin** - Reactive Array.join
- **useArrayMap** - Reactive Array.map
- **useArrayReduce** - Reactive Array.reduce
- **useArraySome** - Reactive Array.some
- **useArrayUnique** - Reactive unique array
- **useSorted** - Reactive sort array

## Time

- **useCountdown** - Wrapper for useIntervalFn that provides a countdown timer
- **useDateFormat** - Get the formatted date according to the string of tokens passed in
- **useTimeAgo** - Reactive time ago

## Utilities

- **createEventHook** - Utility for creating event hooks
- **createUnrefFn** - Make a plain function accepting ref and raw values as arguments
- **get** - Shorthand for accessing ref.value
- **isDefined** - Non-nullish checking type guard for Ref
- **makeDestructurable** - Make isomorphic destructurable for object and array at the same time
- **set** - Shorthand for ref.value = x
- **useAsyncQueue** - Executes each asynchronous task sequentially and passes the current task result to the next task
- **useBase64** - Reactive base64 transforming
- **useCached** - Cache a ref with a custom comparator
- **useCloned** - Reactive clone of a ref
- **useConfirmDialog** - Creates event hooks to support modals and confirmation dialog chains
- **useCounter** - Basic counter with utility functions
- **useCycleList** - Cycle through a list of items
- **useDebounceFn** - Debounce execution of a function
- **useEventBus** - A basic event bus
- **useMemoize** - Cache results of functions depending on arguments and keep it reactive
- **useOffsetPagination** - Reactive offset pagination
- **usePrevious** - Holds the previous value of a ref
- **useStepper** - Provides helpers for building a multi-step wizard interface
- **useSupported** - sSR compatibility isSupported
- **useThrottleFn** - Throttle execution of a function
- **useTimeoutPoll** - Use timeout to poll something
- **useToggle** - A boolean switcher with utility functions
- **useToNumber** - Reactively convert a string ref to number
- **useToString** - Reactively convert a ref to string

## @Electron

- **useIpcRenderer** - Provides ipcRenderer and all of its APIs
- **useIpcRendererInvoke** - Reactive ipcRenderer.invoke API result
- **useIpcRendererOn** - Use ipcRenderer.on with ease and ipcRenderer.removeListener automatically on unmounted
- **useZoomFactor** - Reactive WebFrame zoom factor
- **useZoomLevel** - Reactive WebFrame zoom level

## @Firebase

- **useAuth** - Reactive Firebase Auth binding
- **useFirestore** - Reactive Firestore binding
- **useRTDB** - Reactive Firebase Realtime Database binding

## @Head

- **createHead** - Create the head manager instance.
- **useHead** - Update head meta tags reactively.

## @Integrations

- **useAsyncValidator** - Wrapper for async-validator
- **useAxios** - Wrapper for axios
- **useChangeCase** - Reactive wrapper for change-case
- **useCookies** - Wrapper for universal-cookie
- **useDrauu** - Reactive instance for drauu
- **useFocusTrap** - Reactive wrapper for focus-trap
- **useFuse** - Easily implement fuzzy search using a composable with Fuse.js
- **useIDBKeyval** - Wrapper for idb-keyval
- **useJwt** - Wrapper for jwt-decode
- **useNProgress** - Reactive wrapper for nprogress
- **useQRCode** - Wrapper for qrcode
- **useSortable** - Wrapper for sortable

## @Math

- **createGenericProjection** - Generic version of createProjection
- **createProjection** - Reactive numeric projection from one domain to another
- **logicAnd** - AND condition for refs
- **logicNot** - NOT condition for ref
- **logicOr** - OR conditions for refs
- **useAbs** - Reactive Math.abs
- **useAverage** - Get the average of an array reactively
- **useCeil** - Reactive Math.ceil
- **useClamp** - Reactively clamp a value between two other values
- **useFloor** - Reactive Math.floor
- **useMath** - Reactive Math methods
- **useMax** - Reactive Math.max
- **useMin** - Reactive Math.min
- **usePrecision** - Reactively set the precision of a number
- **useProjection** - Reactive numeric projection from one domain to another
- **useRound** - Reactive Math.round
- **useSum** - Get the sum of an array reactively
- **useTrunc** - Reactive Math.trunc

## @Motion

- **useElementStyle** - Sync a reactive object to a target element CSS styling
- **useElementTransform** - Sync a reactive object to a target element CSS transform.
- **useMotion** - Putting your components in motion.
- **useMotionProperties** - Access Motion Properties for a target element.
- **useMotionVariants** - Handle the Variants state and selection.
- **useSpring** - Spring animations.

## @Router

- **useRouteHash** - Shorthand for a reactive route.hash
- **useRouteParams** - Shorthand for a reactive route.params
- **useRouteQuery** - Shorthand for a reactive route.query

## @RxJS

- **from** - Wrappers around RxJS's from() and fromEvent() to allow them to accept refs
- **toObserver** - Sugar function to convert a ref into an RxJS Observer
- **useExtractedObservable** - Use an RxJS Observable as extracted from one or more composables
- **useObservable** - Use an RxJS Observable
- **useSubject** - Bind an RxJS Subject to a ref and propagate value changes both ways
- **useSubscription** - Use an RxJS Subscription without worrying about unsubscribing from it or creating memory leaks
- **watchExtractedObservable** - Watch the values of an RxJS Observable as extracted from one or more composables

## @SchemaOrg

- **createSchemaOrg** - Create the schema.org manager instance.
- **useSchemaOrg** - Update schema.org reactively.

## @Sound

- **useSound** - Play sound effects reactively.
