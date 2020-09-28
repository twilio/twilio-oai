twilio-oai changelog
====================
[2020-09-28] Version 1.0.1
--------------------------
**Api**
- Add optional property `call_reason` in the participant create request
- Make sip-domain-service endpoints available in stage-au1 and prod-au1

**Messaging**
- Removed beta feature gate from WhatsApp Templates API

**Serverless**
- Add Build Status endpoint

**Video**
- [Rooms] Add new room type "go" for WebRTC Go


[2020-09-21] Version 1.0.0
--------------------------
**Library - Docs**
- [PR #4](https://github.com/twilio/twilio-oai/pull/4): Adding README.md. Thanks to [@garethpaul](https://github.com/garethpaul)!

**Accounts**
- Add Auth Token rotation API

**Conversations**
- Change resource path for Webhook Configuration

**Events**
- Schemas API get all Schemas names and versions


[2020-09-17] Version 0.1.1
--------------------------
**Conversations**
- Expose Configuration and Service Configuration resources
- Add Unique Name support for Conversations
- Add Services Push Notification resource
- Add Service scoped Conversation resources
- Support Identity in Users resource endpoint

**Messaging**
- GA Deactivation List API
- Add domain cert API's(fetch, update, create) for link tracker

**Numbers**
- Add API endpoint for Supporting Document deletion

**Proxy**
- Updated usage of FailOnParticipantConflict param to apply only to accounts with ProxyAllowParticipantConflict account flag

**Supersim**
- Add `AccountSid` parameter to Sim resource update request
- Add `ready` status as an available status for a Sim resource


[2020-08-26] Version 0.1.0
--------------------------
