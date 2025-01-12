PK
     f�|V               service_worker_js/PK
     f�|V����i   i      service_worker_js/sketch.json{
  "cpu": {
    "fqbn": "",
    "name": "",
    "type": ""
  },
  "secrets": [],
  "included_libs": []
}PK
     f�|V� �7�  �     service_worker_js/ReadMe.adoc:Author: danielwastaken
:Email: {AuthorEmail}
:Date: 28/02/2023
:Revision: version#
:License: Public Domain

= Project: {Project}

Describe your project

== Step 1: Installation
Please describe the steps to install this project.

For example:

1. Open this file
2. Edit as you like
3. Release to the World!

== Step 2: Assemble the circuit

Assemble the circuit following the diagram layout.png attached to the sketch

== Step 3: Load the code

Upload the code contained in this sketch on to your board

=== Folder structure

....
 sketch123                => Arduino sketch folder
  ├── sketch123.ino       => main Arduino file
  ├── schematics.png      => (optional) an image of the required schematics
  ├── layout.png          => (optional) an image of the layout
  └── ReadMe.adoc         => this file
....

=== License
This project is released under a {License} License.

=== Contributing
To contribute to this project please contact danielwastaken https://id.arduino.cc/danielwastaken

=== BOM
Add the bill of the materials you need for this project.

|===
| ID | Part name      | Part number | Quantity
| R1 | 10k Resistor   | 1234-abcd   | 10
| L1 | Red LED        | 2345-asdf   | 5
| A1 | Arduino Zero   | ABX00066    | 1
|===


=== Help
This document is written in the _AsciiDoc_ format, a markup language to describe documents.
If you need help you can search the http://www.methods.co.nz/asciidoc[AsciiDoc homepage]
or consult the http://powerman.name/doc/asciidoc[AsciiDoc cheatsheet]
PK
     f�|V�1���   �   '   service_worker_js/service_worker_js.inoimportScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js');

workbox.routing.registerRoute(
    ({request}) => request.destination === 'image',
    new workbox.strategies.NetworkFirst()
);PK 
     f�|V                            service_worker_js/PK 
     f�|V����i   i                0   service_worker_js/sketch.jsonPK 
     f�|V� �7�  �               �   service_worker_js/ReadMe.adocPK 
     f�|V�1���   �   '               service_worker_js/service_worker_js.inoPK      +  !    