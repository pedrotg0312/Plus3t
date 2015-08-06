/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady () {
    checkConnection();
}

function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = '1'; //'Unknown connection';
    states[Connection.ETHERNET] = '1'; //'Ethernet connection';
    states[Connection.WIFI]     = '1'; //'WiFi connection';
    states[Connection.CELL_2G]  = '1'; //'Cell 2G connection';
    states[Connection.CELL_3G]  = '1'; //'Cell 3G connection';
    states[Connection.CELL_4G]  = '1'; //'Cell 4G connection';
    states[Connection.CELL]     = '1'; //'Cell generic connection';
    states[Connection.NONE]     = '0'; //'No network connection';

    if (states[network] == '1') 
    {
        alert('Cuentas con conexión a internet');
    }else{
        alert('No cuentas con conexión a internet');
    }
}