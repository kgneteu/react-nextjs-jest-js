import React  from "react";
import Example from "../components/Example";
import renderer from 'react-test-renderer';

describe("Example", function () {
    it('should render', function () {
        const tree = renderer.create(
            <Example/>
        ).toJSON();
        expect(tree).toMatchInlineSnapshot(`
<div>
  Example
</div>
`)
    });
});

