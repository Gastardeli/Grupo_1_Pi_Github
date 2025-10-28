#include <Ultrasonic.h>

const int PINO_TRIGGER = 13;
const int PINO_ECHO = 12;

HC_SR04 sensor(PINO_TRIGGER, PINO_ECHO);

void setup() {
  Serial.begin(9600);
  }

void loop() {  
  Serial.print(sensor.distance());
  Serial.println(";");
  delay(1000);
}


 /*const int var = 0;
  cont << var;

  return +1;*/
