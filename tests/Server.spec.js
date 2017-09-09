test('Server', ({assert, done}) => {
	var Writable = new require('stream').Writable

	class Foo {
		render () {
			return Bar
		}
	}

	class Bar {
		render() {
			return Faz
		}
	}

	class Faz {
		render() {
			return h('h1', {className: 'faz', style: {marginTop: '20px'}}, 'Faz')
		}
	}

	class Baz {
		render() {
			return [h('head'), h('body')]
		}
	}

	class Err {
		componentDidCatch(err) {
			err.report = ''
			return 'Hello'
		}
		render () {
			throw 'error'
		}
	}

	assert(`${h(Err)}` === 'Hello', 'Component#componentDidCatch')
	assert(`${h(Foo)}` === '<h1 class="faz" style="margin-top:20px;">Faz</h1>', 'Composite.toString()')
	assert(`${h(Faz)}` === '<h1 class="faz" style="margin-top:20px;">Faz</h1>', 'Component.toString()')
	assert(`${h('h1', {onClick: function () {}}, 'Faz')}` === '<h1>Faz</h1>', 'Element.toString()')
	assert(`${h(Baz)}` === '<head></head><body></body>', 'Fragment.toString()')

	var output = ''
	var result = '<h1 class="foo">12<p>Hello</p><span></span><img></h1>'
	var element = [h('h1', {className: 'foo'}, 1, 2, h('p', 'Hello'), h('span'), h('img'))]

	var jsonComposite = '{"type":"h1","props":{"className":"faz","style":{"marginTop":"20px"}},"children":["Faz"]}'
	var jsonElement = '{"type":"h1","props":{},"children":["Faz"]}'
	var jsonComponent = '{"type":"h1","props":{"className":"faz","style":{"marginTop":"20px"}},"children":["Faz"]}'
	var jsonFragment = '[{"type":"head","props":{},"children":[]},{"type":"body","props":{},"children":[]}]'

	assert(JSON.stringify(h(Foo)) === jsonComposite, 'Composite.toJSON')
	assert(JSON.stringify(h(Faz)) === jsonComponent, 'Component.toJSON')
	assert(JSON.stringify(h('h1', 'Faz')) === jsonElement, 'Element.toJSON')
	assert(JSON.stringify(h(Baz)) === jsonFragment, 'Fragment.toJSON')

	var writable = Writable({
	  write(chunk, encoding, callback) {
      output += chunk.toString()
      callback()
	  }
	})

	renderToStream(element, writable, () => {
		assert(output === result, '#renderToStream(element, writable, callback)')

		output = ''
		writable = Writable({
		  write(chunk, encoding, callback) {
	      output += chunk.toString()
	      callback()
		  }
		})

		renderToString(element, writable, () => {
			assert(output === result, '#renderToString(element, writable, callback)')
			assert(renderToString(element) === result, '#renderToString(element)')
			done()
		})
	})
})
