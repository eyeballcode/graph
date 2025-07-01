import { expect } from 'chai'
import Vertex from '../lib/Vertex.mjs'
import Edge from '../lib/Edge.mjs'

describe('The edge class', () => {
  it('Should contain attributes', () => {
    let vertexA = new Vertex('A')
    let vertexB = new Vertex('B')

    let edge = new Edge(vertexA, vertexB, 1)
    edge.setAttrs({ name: 'Hello', test: 'World' })
    expect(edge.getAttr('name')).to.equal('Hello')
  })

  it('Allows updating attribute values', () => {
    let vertexA = new Vertex('A')
    let vertexB = new Vertex('B')

    let edge = new Edge(vertexA, vertexB, 1)
    edge.setAttrs({ name: 'Hello', test: 'World' })
    edge.setAttr('foo', 'bar')
    expect(edge.getAttr('foo')).to.equal('bar')
  })
})