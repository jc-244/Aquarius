%%KC_BLOCK%%<div class="kc-visual-plan" data-visual-plan-b64="eyJwcmltYXJ5X2FuY2hvciI6InJlYWN0X2RlbW8iLCJyYXRpb25hbGUiOiJUaGlzIHNlY3Rpb24gaXMgYWJvdXQgaG93IHRoZSBwYXJhbWV0ZXJzIEMsIE9tZWdhLCBGLCB0aGV0YSwgYW5kIHNhbXBsaW5nIGludGVydmFsIFQgY2hhbmdlIGEgZGlzY3JldGUtdGltZSBzaW51c29pZC4gQSBzdGF0aWMgZmlndXJlIHdvdWxkIHNob3cgb25seSBvbmUgY2FzZSwgd2hpbGUgYW4gaW50ZXJhY3RpdmUgc3RlbSBwbG90IGxldHMgc3R1ZGVudHMgc2VlIHNhbXBsZXMgcGVyIGN5Y2xlLCBwaGFzZSBzaGlmdCwgc2lnbiBvZiBPbWVnYSwgYW5kIHNhbXBsZWQgY29udGludW91cy10aW1lIGNvbnZlcnNpb24gZGlyZWN0bHkuIE5vIGNyb3BwZWQgdGV4dGJvb2sgZmlndXJlIGlzIGF2YWlsYWJsZSwgYW5kIHdlYiBzb3VyY2VzIGFyZSB1bmF2YWlsYWJsZSwgc28gdGhlIG1haW4gdmlzdWFsIHN0cmF0ZWd5IHNob3VsZCBiZSBhIFJlYWN0ICsgQ2FudmFzIGRlbW8gcmF0aGVyIHRoYW4gZ2VuZXJhdGVkIGFydC4iLCJjcmFtIjoiVXNlIHRoZSBkZW1vIHRvIHJlY29nbml6ZSBleGFtIHRyaWdnZXJzIHF1aWNrbHk6IE9tZWdhIHRvIEYsIHNhbXBsZXMgcGVyIGN5Y2xlLCBuZWdhdGl2ZSBPbWVnYSwgYW5kIE9tZWdhID0gb21lZ2EgVC4iLCJzdGFuZGFyZCI6IlVzZSB0aGUgZGVtbyB0byBjb25uZWN0IGVhY2ggc3ltYm9sIGluIEMgY29zKE9tZWdhIG4gKyB0aGV0YSkgdG8gb25lIHZpc2libGUgZWZmZWN0IG9uIGEgc3RlbSBwbG90LiIsInRvcF9zY29yZSI6IlVzZSB0aGUgZGVtbyB0byB0ZXN0IHRyYXBzOiBuZWdhdGl2ZSBmcmVxdWVuY3kgaGFzIHRoZSBzYW1lIG1hZ25pdHVkZSwgcGhhc2UgY2hhbmdlcyBzdGFydGluZyB2YWx1ZSwgYW5kIHBlcmlvZGljaXR5IHJlcXVpcmVzIHJhdGlvbmFsIEYuIn0=" style="display:none;"></div>%%KC_END%%
# 3.3–4 Discrete-Time Sinusoid \(C\cos(\Omega n + \theta)\)

> **Section Objective:** Learn how to read, convert, and recognize discrete-time sinusoids of the form \(C\cos(\Omega n + \theta)\).

---

## Concepts In This Section

- Discrete-time sinusoid
- Radians per sample
- Cycles per sample
- Periodicity condition
- Negative frequency
- Sampled continuous-time sinusoid

## 1. The Discrete-Time Sinusoid

This is the standard form for a sampled sinusoidal sequence indexed by integer \(n\).

**Symbol meanings:**

| Symbol | Meaning | Units |
|--------|---------|-------|
| \(C\) | Amplitude | same as signal |
| \(n\) | Sample index | integer |
| \(\Omega\) | Angular frequency | radians/sample |
| \(F\) | Frequency | cycles/sample |
| \(\theta\) | Phase | radians |

**When to use it:** Whenever a signal is written as samples of a cosine indexed by \(n\).

### EXAM TRIGGER

Seeing \(\cos(\ldots n + \ldots)\) — identify \(C\), \(\Omega\), and \(\theta\) immediately.

### COMMON MISUSE

\(\Omega\) is in **radians/sample**, not radians/second. Confusing these units is the most frequent error when moving between continuous and discrete time.

#### Minimal Example

For \(2\cos\!\left(\tfrac{\pi}{3}n - \tfrac{\pi}{6}\right)\):
- \(C = 2\)
- \(\Omega = \tfrac{\pi}{3}\) rad/sample
- \(\theta = -\tfrac{\pi}{6}\) rad

$$C\cos(\Omega n + \theta) = C\cos(2\pi F n + \theta)$$

%%KC_BLOCK%%<div class="kc-visual-meta" data-visual-kind="interactive_demo" data-teaching-role="concept_anchor" data-visual-use-b64="eyJjcmFtIjoiTW92ZSB0aGUgzqkgc2xpZGVyIGFuZCBpbW1lZGlhdGVseSByZWFkIEYgYW5kIHNhbXBsZXMgcGVyIGN5Y2xlIGZyb20gdGhlIGxpdmUgcmVhZG91dC4iLCJzdGFuZGFyZCI6IlNldCB0aGUgZGVmYXVsdCB0ZXh0Ym9vayBleGFtcGxlIChcXChcXE9tZWdhID0gXFxwaS8xMlxcKSwgXFwoXFx0aGV0YSA9IFxccGkvNFxcKSkgYW5kIGNvbm5lY3QgZWFjaCBzbGlkZXIgdG8gb25lIHZpc2libGUgY2hhbmdlIGluIHRoZSBzdGVtcy4iLCJ0b3Bfc2NvcmUiOiJVc2UgdGhlIG5lZ2F0aXZlLc6pIHRvZ2dsZSB0byBjb25maXJtIHRoYXQgXFwoXFxjb3MoLVxcT21lZ2EgbiArIFxcdGhldGEpID0gXFxjb3MoXFxPbWVnYSBuIC0gXFx0aGV0YSlcXCkg4oCUIHRoZSBzdGVtcyBzaGlmdCBwaGFzZSBidXQgdGhlIGN5Y2xlIGxlbmd0aCBpcyBpZGVudGljYWwuIn0=" style="display:none;"></div><div class="kc-interactive-demo" data-demo-b64="eyJ0eXBlIjoiaW50ZXJhY3RpdmVfZGVtbyIsInRlYWNoaW5nX3JvbGUiOiJjb25jZXB0X2FuY2hvciIsImRlbW9fdGl0bGUiOiJEaXNjcmV0ZS1UaW1lIFNpbnVzb2lkIFBhcmFtZXRlciBFeHBsb3JlciIsImRlbW9fc3BlYyI6eyJmcmFtZXdvcmsiOiJyZWFjdF9jYW52YXMiLCJzaWduYWwiOiJ4W25dID0gQyBjb3MoT21lZ2EgKiBuICsgdGhldGEpIiwic2FtcGxlX3JhbmdlIjp7Im5fbWluIjowLCJuX21heCI6NDh9LCJwbG90X3R5cGUiOiJzdGVtX3Bsb3QiLCJndWlkZV9jdXJ2ZSI6eyJzaG93Ijp0cnVlLCJsYWJlbCI6Imd1aWRlIG9ubHk7IHNhbXBsZXMgYXJlIHRoZSBzaWduYWwiLCJzdHlsZSI6ImZhaW50IGRhc2hlZCJ9LCJzbGlkZXJzIjpbeyJpZCI6IkMiLCJsYWJlbCI6IkMgKEFtcGxpdHVkZSkiLCJtaW4iOjAuMSwibWF4IjozLCJzdGVwIjowLjEsImRlZmF1bHQiOjF9LHsiaWQiOiJPbWVnYSIsImxhYmVsIjoizqkgKHJhZC9zYW1wbGUpIiwibWluIjowLjA1LCJtYXgiOjMuMTQsInN0ZXAiOjAuMDEsImRlZmF1bHQiOjAuMjYxOH0seyJpZCI6InRoZXRhIiwibGFiZWwiOiLOuCAocmFkKSIsIm1pbiI6LTMuMTQsIm1heCI6My4xNCwic3RlcCI6MC4wNSwiZGVmYXVsdCI6MC43ODU0fV0sImxpdmVfcmVhZG91dHMiOlsizqkgPSB7T21lZ2F9IHJhZC9zYW1wbGUiLCJGID0gzqkgLyAoMs+AKSA9IHtGfSBjeWNsZXMvc2FtcGxlIiwiU2FtcGxlcyBwZXIgY3ljbGUg4omIIHsxL0Z9ICh3aGVuIEYg4omgIDApIl0sInRvZ2dsZSI6eyJpZCI6Im5lZ19vbWVnYSIsImxhYmVsIjoiVXNlIG5lZ2F0aXZlIM6pIiwiZWZmZWN0IjoiT21lZ2Eg4oaSIC1PbWVnYSJ9LCJkZWZhdWx0X2V4YW1wbGUiOiJDPTEsIE9tZWdhPXBpLzEyLCB0aGV0YT1waS80ICh0ZXh0Ym9vayBleGFtcGxlIGNvcyhwaSpuLzEyICsgcGkvNCkpIn0sIndoYXRfdG9fbm90aWNlIjpbIkluY3JlYXNpbmcgXFwoQ1xcKSBzY2FsZXMgdGhlIGhlaWdodCBvZiBhbGwgc3RlbXMgcHJvcG9ydGlvbmFsbHkg4oCUIGFtcGxpdHVkZSBvbmx5IGNoYW5nZXMgbWFnbml0dWRlLCBub3QgdGltaW5nLiIsIkNoYW5naW5nIFxcKFxcdGhldGFcXCkgc2hpZnRzIHdoZXJlIHRoZSBzZXF1ZW5jZSBzdGFydHMg4oCUIGEgcG9zaXRpdmUgXFwoXFx0aGV0YVxcKSBtb3ZlcyB0aGUgcGVhayBlYXJsaWVyICh0byB0aGUgbGVmdCkuIiwiRGVjcmVhc2luZyBcXCh8XFxPbWVnYXxcXCkgc3ByZWFkcyB0aGUgc3RlbXMgb3V0IOKAlCBmZXdlciByYWRpYW5zIHBlciBzdGVwIG1lYW5zIG1vcmUgc2FtcGxlcyBwZXIgY3ljbGUuIiwiVG9nZ2xpbmcgdG8gbmVnYXRpdmUgXFwoXFxPbWVnYVxcKSBtaXJyb3JzIHRoZSBwaGFzZSBkaXJlY3Rpb24gYnV0IGxlYXZlcyB0aGUgZnJlcXVlbmN5IG1hZ25pdHVkZSBcXCh8XFxPbWVnYXxcXCkgdW5jaGFuZ2VkLiJdLCJtb2RlX3NwZWNpZmljX3Zpc3VhbF91c2UiOnsiY3JhbSI6Ik1vdmUgdGhlIM6pIHNsaWRlciBhbmQgaW1tZWRpYXRlbHkgcmVhZCBGIGFuZCBzYW1wbGVzIHBlciBjeWNsZSBmcm9tIHRoZSBsaXZlIHJlYWRvdXQuIiwic3RhbmRhcmQiOiJTZXQgdGhlIGRlZmF1bHQgdGV4dGJvb2sgZXhhbXBsZSAoXFwoXFxPbWVnYSA9IFxccGkvMTJcXCksIFxcKFxcdGhldGEgPSBcXHBpLzRcXCkpIGFuZCBjb25uZWN0IGVhY2ggc2xpZGVyIHRvIG9uZSB2aXNpYmxlIGNoYW5nZSBpbiB0aGUgc3RlbXMuIiwidG9wX3Njb3JlIjoiVXNlIHRoZSBuZWdhdGl2ZS3OqSB0b2dnbGUgdG8gY29uZmlybSB0aGF0IFxcKFxcY29zKC1cXE9tZWdhIG4gKyBcXHRoZXRhKSA9IFxcY29zKFxcT21lZ2EgbiAtIFxcdGhldGEpXFwpIOKAlCB0aGUgc3RlbXMgc2hpZnQgcGhhc2UgYnV0IHRoZSBjeWNsZSBsZW5ndGggaXMgaWRlbnRpY2FsLiJ9fQ=="></div>%%KC_END%%

## 2. Frequency in Cycles per Sample and Periodicity

These two formulas are linked: the first converts \(\Omega\) to \(F\); the second states when the sequence actually repeats.

**Symbol meanings:**

- \(F\) — frequency in cycles/sample
- \(\Omega\) — angular frequency in radians/sample
- \(m\), \(N\) — integers (\(N > 0\)); \(N\) is the period in samples after reducing the fraction

**Periodicity rule:** A discrete-time sinusoid \(C\cos(\Omega n + \theta)\) is periodic **if and only if** \(F\) is a rational number, i.e., \(F = m/N\) for some integers \(m\) and \(N\).

### EXAM TRIGGER

A problem asks whether \(\cos(\Omega n + \theta)\) is periodic, or asks for the period \(N\).

### COMMON MISUSE

Every continuous-time cosine is periodic, but **not every discrete-time sinusoid is periodic**. If \(F\) is irrational (e.g., \(F = \sqrt{2}\) or \(F = \pi\)), the sequence never repeats exactly.

#### Textbook Example

$$\Omega = \frac{\pi}{12} \implies F = \frac{\pi/12}{2\pi} = \frac{1}{24}$$

So the sinusoid has **24 samples per cycle** and is periodic with period \(N = 24\).

$$F = \frac{\Omega}{2\pi}, \quad F = \frac{m}{N}$$

## 3. Negative Omega is not a negative frequency magnitude

Because cosine is an even function, \(\cos(-u) = \cos(u)\). Applying this:

$$\cos(-\Omega n + \theta) = \cos(\Omega n - \theta)$$

Changing \(\Omega\) to \(-\Omega\) is equivalent to flipping the sign of the phase — it does **not** produce a negative frequency. The frequency magnitude is always \(|\Omega|\).

**When to use this:** When an exam gives \(\cos(-\Omega n + \theta)\) and asks for the frequency.

### COMMON MISUSE

Reporting a negative frequency for a real cosine sequence. Frequency magnitude is never negative.

#### Near-Miss Example

$$x[n] = \cos\!\left(-\frac{\pi}{6}n + \frac{\pi}{3}\right)$$

Frequency magnitude = \(\left|-\dfrac{\pi}{6}\right| = \dfrac{\pi}{6}\) rad/sample — **not** \(-\pi/6\) rad/sample.

$$\cos(-\Omega n + \theta) = \cos(\Omega n - \theta)$$

## 4. Sampling a Continuous-Time Sinusoid

Sampling \(\cos(\omega t)\) every \(T\) seconds means evaluating it only at \(t = nT\):

$$x[n] = \cos(\omega \cdot nT) = \cos(\Omega\, n)$$

The discrete-time angular frequency \(\Omega\) is produced directly by the sampling process.

**Symbol meanings:**

| Symbol | Meaning | Units |
|--------|---------|-------|
| \(\omega\) | Continuous-time angular frequency | radians/second |
| \(T\) | Sampling interval | seconds/sample |
| \(\Omega\) | Discrete-time angular frequency | radians/sample |

### EXAM TRIGGER

A problem gives a continuous-time sinusoid and a sampling interval (or sampling rate) and asks for the discrete-time signal.

### COMMON MISUSE

\(\omega\) (rad/s) and \(\Omega\) (rad/sample) have **different units**. Substituting one for the other without multiplying by \(T\) is a unit error.

$$x[n] = \cos(\omega\, nT) = \cos(\Omega\, n)$$

$$\Omega = \omega T$$
*Multiplying radians/second by seconds/sample cancels the time unit and leaves **radians/sample** — exactly the unit of \(\Omega\).

#### Minimal Example

$$\omega = 100\pi \text{ rad/s}, \quad T = 0.001 \text{ s/sample}$$
$$\Omega = (100\pi)(0.001) = 0.1\pi \text{ rad/sample}$$

#### Warning

If the problem gives sampling **rate** \(f_s\) instead of \(T\), convert first:

$$T = \frac{1}{f_s}$$

then apply \(\Omega = \omega T\).*

---
**📌 Key Takeaways**
- Standard form: \(C\cos(\Omega n + \theta) = C\cos(2\pi F n + \theta)\) — \(C\) is amplitude, \(\Omega\) is rad/sample, \(\theta\) is phase.
- Convert angular to cyclic frequency: \(F = \Omega/(2\pi)\) cycles/sample; samples per cycle \(= 1/F\).
- Periodicity requires rational frequency: \(F = m/N\) for integers \(m\), \(N\) — irrational \(F\) means no repetition.
- Negative \(\Omega\) identity: \(\cos(-\Omega n + \theta) = \cos(\Omega n - \theta)\) — frequency magnitude is \(|\Omega|\), never negative.
- Sampling relation: \(\Omega = \omega T\) — multiply rad/s by s/sample to get rad/sample; use \(T = 1/f_s\) if rate is given.

- Core formula: \(F = \frac{\Omega}{2\pi}, \quad F = \frac{m}{N}\).
*In the next section, use these frequency ideas to analyze discrete-time signals with complex exponentials and system responses.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NywicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo2LCJtYXgiOjh9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6InNpbnVzb2lkX3BhcmFtZXRlcl9yZWFkaW5nIiwibGFiZWwiOiJSZWFkaW5nIEMgY29zKE9tZWdhIG4gKyB0aGV0YSkiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6MX0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDFfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkZvciBcXCh4W25dID0gM1xcY29zXFwhXFxsZWZ0KFxcdGZyYWN7XFxwaX17NH1uIC0gXFx0ZnJhY3tcXHBpfXs2fVxccmlnaHQpXFwpLCB3aGljaCBwYXJhbWV0ZXIgbGlzdCBpcyBjb3JyZWN0PyIsIm9wdGlvbnMiOlsiQS4gXFwoQyA9IDNcXCksIFxcKFxcT21lZ2EgPSBcXHBpLzRcXCkgcmFkL3NhbXBsZSwgXFwoXFx0aGV0YSA9IC1cXHBpLzZcXCkiLCJCLiBcXChDID0gXFxwaS80XFwpLCBcXChcXE9tZWdhID0gM1xcKSByYWQvc2FtcGxlLCBcXChcXHRoZXRhID0gLVxccGkvNlxcKSIsIkMuIFxcKEMgPSAzXFwpLCBcXChcXE9tZWdhID0gLVxccGkvNlxcKSByYWQvc2FtcGxlLCBcXChcXHRoZXRhID0gXFxwaS80XFwpIiwiRC4gXFwoQyA9IDNcXCksIFxcKEYgPSBcXHBpLzRcXCkgY3ljbGVzL3NhbXBsZSwgXFwoXFx0aGV0YSA9IC1cXHBpLzZcXCkiXSwiY29ycmVjdF9vcHRpb24iOiJBIiwiZXhwbGFuYXRpb24iOiJUaGUgY29lZmZpY2llbnQgb3V0c2lkZSB0aGUgY29zaW5lIGlzIGFtcGxpdHVkZSBcXChDID0gM1xcKSwgdGhlIGNvZWZmaWNpZW50IG11bHRpcGx5aW5nIFxcKG5cXCkgaXMgXFwoXFxPbWVnYSA9IFxccGkvNFxcKSByYWRpYW5zL3NhbXBsZSwgYW5kIHRoZSBjb25zdGFudCBwaGFzZSBpcyBcXChcXHRoZXRhID0gLVxccGkvNlxcKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkIiOiJUaGlzIHN3YXBzIHRoZSBhbXBsaXR1ZGUgYW5kIHRoZSBjb2VmZmljaWVudCBvZiBcXChuXFwpLiIsIkMiOiJUaGlzIGNvbmZ1c2VzIHRoZSBwaGFzZSB3aXRoIHRoZSBmcmVxdWVuY3kgY29lZmZpY2llbnQuIiwiRCI6IlxcKFxccGkvNFxcKSBpcyBcXChcXE9tZWdhXFwpIGluIHJhZGlhbnMvc2FtcGxlLCBub3QgXFwoRlxcKSBpbiBjeWNsZXMvc2FtcGxlLiJ9LCJoaW50IjoiTG9vayBmb3IgdGhlIG51bWJlciBvdXRzaWRlIGNvc2luZSwgdGhlIGNvZWZmaWNpZW50IG9mIFxcKG5cXCksIGFuZCB0aGUgY29uc3RhbnQgYW5nbGUuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX1dfSx7ImlkIjoib21lZ2FfdG9fY3ljbGVzX3Blcl9zYW1wbGUiLCJsYWJlbCI6IkNvbnZlcnRpbmcgT21lZ2EgdG8gRiBhbmQgc2FtcGxlcyBwZXIgY3ljbGUiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDJfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkEgZGlzY3JldGUtdGltZSBzaW51c29pZCBoYXMgXFwoXFxPbWVnYSA9IFxccGkvMTJcXCkgcmFkaWFucy9zYW1wbGUuIFdoYXQgaXMgXFwoRlxcKSBpbiBjeWNsZXMvc2FtcGxlPyIsIm9wdGlvbnMiOlsiQS4gXFwoMS8yNFxcKSIsIkIuIFxcKDEvMTJcXCkiLCJDLiBcXCgxMlxcKSIsIkQuIFxcKDI0XFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQSIsImV4cGxhbmF0aW9uIjoiVXNlIFxcKEYgPSBcXE9tZWdhLygyXFxwaSlcXCkuIFNpbmNlIFxcKFxcT21lZ2EgPSBcXHBpLzEyXFwpLCB3ZSBnZXQgXFwoRiA9IChcXHBpLzEyKS8oMlxccGkpID0gMS8yNFxcKSBjeWNsZXMvc2FtcGxlLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQiI6IlRoaXMgZGl2aWRlcyBieSBcXChcXHBpXFwpIGJ1dCBmb3JnZXRzIHRoZSBmYWN0b3IgXFwoMlxccGlcXCkuIiwiQyI6IlRoaXMgdHJlYXRzIHRoZSBkZW5vbWluYXRvciBhcyBmcmVxdWVuY3kgZGlyZWN0bHkuIiwiRCI6IlxcKDI0XFwpIGlzIHNhbXBsZXMgcGVyIGN5Y2xlLCBub3QgY3ljbGVzIHBlciBzYW1wbGUuIn0sImhpbnQiOiJDeWNsZXMgcGVyIHNhbXBsZSBtZWFucyBkaXZpZGUgcmFkaWFucyBwZXIgc2FtcGxlIGJ5IFxcKDJcXHBpXFwpLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwMl9xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiSWYgXFwoRiA9IDEvMjRcXCkgY3ljbGVzL3NhbXBsZSwgd2hhdCBkb2VzIHRoaXMgbWVhbiB2aXN1YWxseT8iLCJvcHRpb25zIjpbIkEuIFRoZSBzaW51c29pZCBjb21wbGV0ZXMgb25lIGN5Y2xlIGV2ZXJ5IDI0IHNhbXBsZXMuIiwiQi4gVGhlIHNpbnVzb2lkIGNvbXBsZXRlcyAyNCBjeWNsZXMgZXZlcnkgc2FtcGxlLiIsIkMuIFRoZSBhbXBsaXR1ZGUgbXVzdCBiZSAyNC4iLCJELiBUaGUgcGhhc2UgbXVzdCBiZSBcXCgxLzI0XFwpIHJhZGlhbnMuIl0sImNvcnJlY3Rfb3B0aW9uIjoiQSIsImV4cGxhbmF0aW9uIjoiXFwoRiA9IDEvMjRcXCkgY3ljbGVzL3NhbXBsZSBtZWFucyBlYWNoIHNhbXBsZSBhZHZhbmNlcyB0aGUgY29zaW5lIGJ5IFxcKDEvMjRcXCkgb2YgYSBjeWNsZSwgc28gb25lIGZ1bGwgY3ljbGUgdGFrZXMgMjQgc2FtcGxlcy4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkIiOiJUaGF0IHdvdWxkIGJlIFxcKEYgPSAyNFxcKSBjeWNsZXMvc2FtcGxlLCBub3QgXFwoMS8yNFxcKS4iLCJDIjoiRnJlcXVlbmN5IGRvZXMgbm90IGRldGVybWluZSBhbXBsaXR1ZGUuIiwiRCI6IkZyZXF1ZW5jeSBkb2VzIG5vdCBkZXRlcm1pbmUgcGhhc2UuIn0sImhpbnQiOiJUYWtlIHRoZSByZWNpcHJvY2FsIG9mIGN5Y2xlcyBwZXIgc2FtcGxlIHRvIGdldCBzYW1wbGVzIHBlciBjeWNsZS4iLCJuZWVkc192aXN1YWwiOnRydWUsInZpc3VhbF90eXBlIjoiaW50ZXJhY3RpdmVfZGVtbyIsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfSx7ImlkIjoicGVyaW9kaWNpdHlfY29uZGl0aW9uIiwibGFiZWwiOiJEaXNjcmV0ZS10aW1lIHBlcmlvZGljaXR5IGNvbmRpdGlvbiBGID0gbS9OIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AzX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJXaGljaCBmcmVxdWVuY3kgZ3VhcmFudGVlcyBhIHBlcmlvZGljIGRpc2NyZXRlLXRpbWUgc2ludXNvaWQ/Iiwib3B0aW9ucyI6WyJBLiBcXChGID0gMy8yMFxcKSIsIkIuIFxcKEYgPSBcXHNxcnR7Mn1cXCkiLCJDLiBcXChGID0gXFxwaVxcKSIsIkQuIEFueSByZWFsIFxcKEZcXCkgd29ya3MiXSwiY29ycmVjdF9vcHRpb24iOiJBIiwiZXhwbGFuYXRpb24iOiJBIGRpc2NyZXRlLXRpbWUgc2ludXNvaWQgaXMgcGVyaW9kaWMgd2hlbiBcXChGXFwpIGNhbiBiZSB3cml0dGVuIGFzIFxcKG0vTlxcKSB3aXRoIGludGVnZXJzIFxcKG1cXCkgYW5kIFxcKE5cXCkuIFRoZSB2YWx1ZSBcXCgzLzIwXFwpIGlzIHJhdGlvbmFsLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQiI6IlxcKFxcc3FydHsyfVxcKSBpcyBpcnJhdGlvbmFsLCBzbyBpdCBkb2VzIG5vdCBmaXQgXFwoRiA9IG0vTlxcKS4iLCJDIjoiXFwoXFxwaVxcKSBpcyBpcnJhdGlvbmFsLCBzbyBpdCBkb2VzIG5vdCBmaXQgXFwoRiA9IG0vTlxcKS4iLCJEIjoiVGhpcyBpcyB0cnVlIGZvciBjb250aW51b3VzLXRpbWUgY29zaW5lIGJ1dCBub3QgZm9yIGRpc2NyZXRlLXRpbWUgc2ludXNvaWRzLiJ9LCJoaW50IjoiQXNrIHdoZXRoZXIgXFwoRlxcKSBpcyByYXRpb25hbC4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDNfcTIiLCJ0eXBlIjoic2hvcnRfYW5zd2VyIiwic3RlbSI6IkEgc3R1ZGVudCBzYXlzIGV2ZXJ5IHNlcXVlbmNlIFxcKFxcY29zKFxcT21lZ2EgbiArIFxcdGhldGEpXFwpIGlzIHBlcmlvZGljIGJlY2F1c2UgY29zaW5lIHJlcGVhdHMuIEV4cGxhaW4gd2h5IHRoaXMgaXMgd3JvbmcgZm9yIGRpc2NyZXRlIHRpbWUuIiwiaWRlYWxfYW5zd2VyIjoiSW4gZGlzY3JldGUgdGltZSwgdGhlIHNhbXBsZXMgcmVwZWF0IG9ubHkgaWYgdGhlIGZyZXF1ZW5jeSBpbiBjeWNsZXMvc2FtcGxlIGlzIHJhdGlvbmFsOiBcXChGID0gXFxPbWVnYS8oMlxccGkpID0gbS9OXFwpLiBJZiBcXChGXFwpIGlzIGlycmF0aW9uYWwsIHRoZSBzYW1wbGVkIHBvaW50cyBuZXZlciBsaW5lIHVwIGV4YWN0bHkgYWZ0ZXIgYW4gaW50ZWdlciBudW1iZXIgb2Ygc2FtcGxlcy4iLCJncmFkaW5nX3J1YnJpYyI6WyJNdXN0IG1lbnRpb24gdGhhdCBkaXNjcmV0ZS10aW1lIHJlcGV0aXRpb24gcmVxdWlyZXMgYW4gaW50ZWdlciBzYW1wbGUgc2hpZnQiLCJNdXN0IHN0YXRlIG9yIHVzZSBcXChGID0gbS9OXFwpIGFzIHRoZSBwZXJpb2RpY2l0eSBjb25kaXRpb24iLCJNdXN0IGRpc3Rpbmd1aXNoIGNvbnRpbnVvdXMgY29zaW5lIHJlcGV0aXRpb24gZnJvbSBzYW1wbGVkIHNlcXVlbmNlIHJlcGV0aXRpb24iXSwiZXhwbGFuYXRpb24iOiJUaGlzIGNoZWNrcyB0aGUgbWFpbiBjb25jZXB0dWFsIHRyYXA6IGNvbnRpbnVvdXMtdGltZSBpbnR1aXRpb24gZG9lcyBub3QgYXV0b21hdGljYWxseSB0cmFuc2ZlciB0byBkaXNjcmV0ZSB0aW1lLiIsImhpbnQiOiJBIGRpc2NyZXRlLXRpbWUgcGVyaW9kIG11c3QgYmUgYW4gaW50ZWdlciBudW1iZXIgb2Ygc2FtcGxlcy4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX0seyJpZCI6Im5lZ2F0aXZlX2ZyZXF1ZW5jeV9jb3NpbmUiLCJsYWJlbCI6IkZyZXF1ZW5jeSBtYWduaXR1ZGUgZm9yIG5lZ2F0aXZlIE9tZWdhIiwiaW1wb3J0YW5jZSI6Im1lZGl1bSIsImV4YW1fd2VpZ2h0IjoibWVkaXVtIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoxfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwNF9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiV2hhdCBpcyB0aGUgZnJlcXVlbmN5IG1hZ25pdHVkZSBvZiBcXCh4W25dID0gXFxjb3NcXCFcXGxlZnQoLVxcdGZyYWN7XFxwaX17NX1uICsgXFx0ZnJhY3tcXHBpfXs4fVxccmlnaHQpXFwpPyIsIm9wdGlvbnMiOlsiQS4gXFwoXFxwaS81XFwpIHJhZGlhbnMvc2FtcGxlIiwiQi4gXFwoLVxccGkvNVxcKSByYWRpYW5zL3NhbXBsZSIsIkMuIFxcKFxccGkvOFxcKSByYWRpYW5zL3NhbXBsZSIsIkQuIFxcKDUvXFxwaVxcKSByYWRpYW5zL3NhbXBsZSJdLCJjb3JyZWN0X29wdGlvbiI6IkEiLCJleHBsYW5hdGlvbiI6IkZvciBhIHJlYWwgY29zaW5lLCBcXChcXGNvcygtXFxPbWVnYSBuICsgXFx0aGV0YSkgPSBcXGNvcyhcXE9tZWdhIG4gLSBcXHRoZXRhKVxcKSwgc28gdGhlIGZyZXF1ZW5jeSBtYWduaXR1ZGUgaXMgXFwofFxcT21lZ2F8ID0gXFxwaS81XFwpLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQiI6IlRoZSBzaWduIGNhbiBiZSBhYnNvcmJlZCBpbnRvIHRoZSBwaGFzZTsgZnJlcXVlbmN5IG1hZ25pdHVkZSBpcyBub3QgbmVnYXRpdmUuIiwiQyI6IlxcKFxccGkvOFxcKSBpcyB0aGUgcGhhc2UsIG5vdCB0aGUgY29lZmZpY2llbnQgb2YgXFwoblxcKS4iLCJEIjoiVGhpcyBpbmNvcnJlY3RseSB0YWtlcyBhIHJlY2lwcm9jYWwgb2YgdGhlIGFuZ3VsYXIgZnJlcXVlbmN5LiJ9LCJoaW50IjoiVXNlIHRoZSBpZGVudGl0eSBcXChcXGNvcygtXFxPbWVnYSBuICsgXFx0aGV0YSkgPSBcXGNvcyhcXE9tZWdhIG4gLSBcXHRoZXRhKVxcKS4iLCJuZWVkc192aXN1YWwiOnRydWUsInZpc3VhbF90eXBlIjoiaW50ZXJhY3RpdmVfZGVtb19uZWdhdGl2ZV9vbWVnYV90b2dnbGUiLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfV19LHsiaWQiOiJzYW1wbGluZ19yZWxhdGlvbiIsImxhYmVsIjoiU2FtcGxpbmcgcmVsYXRpb24gT21lZ2EgPSBvbWVnYSBUIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjF9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3A1X3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJBIGNvbnRpbnVvdXMtdGltZSBzaWduYWwgXFwoXFxjb3MoODBcXHBpIHQpXFwpIGlzIHNhbXBsZWQgZXZlcnkgXFwoVCA9IDAuMDA1XFwpIHNlY29uZHMuIFdoYXQgaXMgdGhlIGRpc2NyZXRlLXRpbWUgYW5ndWxhciBmcmVxdWVuY3kgXFwoXFxPbWVnYVxcKT8iLCJvcHRpb25zIjpbIkEuIFxcKDAuNFxccGlcXCkgcmFkaWFucy9zYW1wbGUiLCJCLiBcXCg4MFxccGlcXCkgcmFkaWFucy9zYW1wbGUiLCJDLiBcXCgxNnssfTAwMFxccGlcXCkgcmFkaWFucy9zYW1wbGUiLCJELiBcXCgwLjAwNVxcKSByYWRpYW5zL3NhbXBsZSJdLCJjb3JyZWN0X29wdGlvbiI6IkEiLCJleHBsYW5hdGlvbiI6IlVzZSBcXChcXE9tZWdhID0gXFxvbWVnYSBUXFwpLiBIZXJlIFxcKFxcT21lZ2EgPSAoODBcXHBpKSgwLjAwNSkgPSAwLjRcXHBpXFwpIHJhZGlhbnMvc2FtcGxlLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQiI6IlRoYXQgaXMgXFwoXFxvbWVnYVxcKSBpbiByYWRpYW5zL3NlY29uZCwgYmVmb3JlIHNhbXBsaW5nLiIsIkMiOiJUaGlzIGRpdmlkZXMgYnkgXFwoVFxcKSBpbnN0ZWFkIG9mIG11bHRpcGx5aW5nIGJ5IFxcKFRcXCkuIiwiRCI6IlRoaXMgdXNlcyBcXChUXFwpIGFsb25lIGFuZCBpZ25vcmVzIFxcKFxcb21lZ2FcXCkuIn0sImhpbnQiOiJSYWRpYW5zL3NlY29uZCB0aW1lcyBzZWNvbmRzL3NhbXBsZSBnaXZlcyByYWRpYW5zL3NhbXBsZS4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfV19XX0=" style="display:none;"></div>%%KC_END%%
