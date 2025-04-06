import React from "react";

import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';


export const ShopCheckout = () => {
  const [active, setActive] = useState(0);
  const [highestStepVisited, setHighestStepVisited] = useState(active);

  const handleStepChange = (nextStep) => {
    const isOutOfBounds = nextStep > 4 || nextStep < 0;

    if (isOutOfBounds) {
      return;
    }

    setActive(nextStep);
    setHighestStepVisited((hSC) => Math.max(hSC, nextStep));
  };

  // Allow the user to freely go back and forth between visited steps.
  const shouldAllowSelectStep = (step) => highestStepVisited >= step && active !== step;

  return (
    <>
      <Stepper active={active} onStepClick={setActive}>
        <Stepper.Step
          label="Confirm Cart"
          description="Confirm cart items"
          allowStepSelect={shouldAllowSelectStep(0)}
        >
          Confirm cart items
        </Stepper.Step>
        <Stepper.Step
          label="Personal Information"
          description="Type your personal information"
          allowStepSelect={shouldAllowSelectStep(1)}
        >
          Type your personal information
        </Stepper.Step>
        <Stepper.Step
          label="Checkout"
          description="Pay for your order"
          allowStepSelect={shouldAllowSelectStep(2)}
        >
          Pay for your order
        </Stepper.Step>
        <Stepper.Step
          label="Completed"
          description="Order has been completed"
          allowStepSelect={shouldAllowSelectStep(3)}
        >
          Completed Checkout!
        </Stepper.Step>

        <Stepper.Completed>
          Completed Checkout!
        </Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={() => handleStepChange(active - 1)}>
          Back
        </Button>
        <Button onClick={() => handleStepChange(active + 1)}>Next step</Button>
      </Group>
    </>
  );
}