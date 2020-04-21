#!/bin/bash
ansible-playbook -v -i  inventories/prod/hosts  it.yml
