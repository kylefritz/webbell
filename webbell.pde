// These constants won't change.  They're used to give names
// to the pins used:

const int analogOutPin = 11; // Analog output pin that the LED is attached to

int outputValue = 210;        // value output to the PWM (analog out)
int inByte = 0;             // incoming serial byte
int incr=1;

//heliocopter
//
//below 210 (4v) nothing
//220 hopping
//230 flight
//>230 soaring


void setup() {
  // initialize serial communications at 9600 bps:
  Serial.begin(9600);
  Serial.println("ready for flight");
  analogWrite(analogOutPin, outputValue);
}

void loop() {
  if (Serial.available() > 0) {
    // get incoming byte:
    inByte = Serial.read();

    if(inByte=='u'){
      Serial.print("up to = " );
      outputValue+=incr;
      analogWrite(analogOutPin, outputValue);
      Serial.println(outputValue);

    }else if(inByte=='d'){
      Serial.print("down to = " );
      outputValue-=incr;
      analogWrite(analogOutPin, outputValue);
      Serial.println(outputValue);
    }else{
      //nope!
    }

    // change the analog out value [0:255]:


    // wait 10 milliseconds before the next loop
    // for the analog-to-digital converter to settle
    // after the last reading:
    delay(10);
  }
}


