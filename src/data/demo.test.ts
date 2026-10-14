import { describe, expect, it } from 'vitest'
import { demoContract } from './demo'

describe('task contract', () => {
  it('requires explicit acceptance tests', () => {
    expect(demoContract.acceptanceTests.length).toBeGreaterThanOrEqual(3)
  })

  it('separates deliverables from constraints', () => {
    expect(demoContract.deliverables).not.toEqual(demoContract.constraints)
  })
})
