%%KC_BLOCK%%<div class="kc-visual-plan" data-visual-plan-b64="eyJwcmltYXJ5X2FuY2hvciI6InJlYWN0X2RlbW8iLCJyYXRpb25hbGUiOiJUaGlzIHNlY3Rpb24gaXMgZm9ybXVsYS1oZWF2eSwgYnV0IHRoZSBjb3JlIGlkZWEgaXMgZHluYW1pYzogZWFjaCBvdXRwdXQgc2FtcGxlIGlzIHByb2R1Y2VkIGZyb20gY3VycmVudCBpbnB1dCBzYW1wbGVzIGFuZCBlYXJsaWVyIG91dHB1dCBzYW1wbGVzLiBBIHN0dWRlbnQtY29udHJvbGxlZCBzZXF1ZW5jZSBkZW1vIHdpbGwgc2hvdyBob3cgZGVwb3NpdHMsIHBhc3QgYmFsYW5jZXMsIG1lbW9yeSBkZXB0aCwgYW5kIHNhbXBsZWQgdmFsdWVzIGFmZmVjdCB0aGUgb3V0cHV0LiBTdGF0aWMgcHVibGljIGltYWdlcyBhcmUgbGVzcyB1c2VmdWwgaGVyZSBiZWNhdXNlIHRoZSB0ZXh0Ym9vayBleGFtcGxlcyBhcmUgY3VzdG9tIGRpZmZlcmVuY2UtZXF1YXRpb24gbW9kZWxzLCBub3QgY2Fub25pY2FsIGRpYWdyYW1zLiIsImNyYW0iOiJVc2UgdGhlIGRlbW8gdG8gcmVjb2duaXplIGV4YW0gdHJpZ2dlcnMgcXVpY2tseTogcHJldmlvdXMgb3V0cHV0IG1lYW5zIHJlY3VycmVuY2U7IHR3byBwcmV2aW91cyBvdXRwdXRzIG1lYW5zIHNlY29uZCBvcmRlcjsgYSBydW5uaW5nIHN1bSBtZWFucyBpbnRlZ3JhdG9yLiIsInN0YW5kYXJkIjoiVXNlIHRoZSBkZW1vIHRvIGNvbm5lY3QgZWFjaCBmb3JtdWxhIHRvIGEgdmlzaWJsZSBpbnB1dC1vdXRwdXQgc2VxdWVuY2UgYW5kIG9uZSByZXByZXNlbnRhdGl2ZSBjYWxjdWxhdGlvbi4iLCJ0b3Bfc2NvcmUiOiJVc2UgdGhlIGRlbW8gdG8gdGVzdCBlZGdlIGNhc2VzOiB6ZXJvIGlucHV0LCBpbXB1bHNlIGlucHV0LCBkaWZmZXJlbnQgaW50ZXJlc3QgcmF0ZXMsIGFuZCBjb25mdXNpbmcgYmFja3dhcmQgdmVyc3VzIGZvcndhcmQgZGlmZmVyZW5jZXMuIn0=" style="display:none;"></div>%%KC_END%%
# 3.4 Examples of Discrete-Time Systems

> **Section Objective:** Learn how real discrete-time systems are modeled by difference equations, sampling rules, digital differentiators, and digital integrators.

## Concepts In This Section

- Savings-account recurrence
- Second-order sales recurrence
- Sampling notation
- Digital differentiator
- Digital integrator
- Discretized differential equation

## 1. Savings account: a first-order discrete-time system

This equation models a bank account updated once per period. The balance after the \(n\)-th deposit equals the previous balance grown by interest, plus the new deposit.

**Symbol definitions:**
- \(x[n]\) — the \(n\)-th deposit (input)
- \(y[n]\) — the account balance immediately after the \(n\)-th deposit (output)
- \(r\) — interest rate per period
- \(a = 1+r\) — growth factor applied to the previous balance

**Minimal example:** If \(r = 0.02\), then \(a = 1.02\). The previous balance is multiplied by \(1.02\) before the new deposit is added.

### EXAM TRIGGER

Any quantity updated from its own previous value — money balance, population, inventory — fits this first-order recurrence pattern.

### COMMON MISUSE

\(y[n-1]\) is the **previous output** (previous balance), not the previous input. Do not substitute \(x[n-1]\) in its place.

$$y[n] - ay[n-1] = x[n], \quad a = 1+r$$

%%KC_BLOCK%%<div class="kc-visual-meta" data-visual-kind="interactive_demo" data-teaching-role="concept_anchor" data-visual-use-b64="eyJjcmFtIjoiU2xpZGUgciBhbmQgd2F0Y2ggdGhlIHVwZGF0ZSBwYXR0ZXJuIHNvIHN0dWRlbnRzIGluc3RhbnRseSBpZGVudGlmeSBmaXJzdC1vcmRlciByZWN1cnJlbmNlIHF1ZXN0aW9ucy4iLCJzdGFuZGFyZCI6IlVzZSBvbmUgZGVwb3NpdCBzZXF1ZW5jZSB0byBzaG93IGhvdyBlYWNoIHlbbl0gaXMgY29tcHV0ZWQgZnJvbSB5W24tMV0gYW5kIHhbbl0uIiwidG9wX3Njb3JlIjoiVGVzdCB6ZXJvIGRlcG9zaXRzLCBjb25zdGFudCBkZXBvc2l0cywgYW5kIG5lZ2F0aXZlIGRlcG9zaXRzIHRvIHNlcGFyYXRlIG5hdHVyYWwgZ3Jvd3RoIGZyb20gZm9yY2VkIGlucHV0LiJ9" style="display:none;"></div><div class="kc-interactive-demo" data-demo-b64="eyJ0eXBlIjoiaW50ZXJhY3RpdmVfZGVtbyIsInRpdGxlIjoiRmlyc3Qtb3JkZXIgcmVjdXJyZW5jZSBleHBsb3JlciIsInRlYWNoaW5nX3JvbGUiOiJjb25jZXB0X2FuY2hvciIsIm1vZGVfc3BlY2lmaWNfdmlzdWFsX3VzZSI6eyJjcmFtIjoiU2xpZGUgciBhbmQgd2F0Y2ggdGhlIHVwZGF0ZSBwYXR0ZXJuIHNvIHN0dWRlbnRzIGluc3RhbnRseSBpZGVudGlmeSBmaXJzdC1vcmRlciByZWN1cnJlbmNlIHF1ZXN0aW9ucy4iLCJzdGFuZGFyZCI6IlVzZSBvbmUgZGVwb3NpdCBzZXF1ZW5jZSB0byBzaG93IGhvdyBlYWNoIHlbbl0gaXMgY29tcHV0ZWQgZnJvbSB5W24tMV0gYW5kIHhbbl0uIiwidG9wX3Njb3JlIjoiVGVzdCB6ZXJvIGRlcG9zaXRzLCBjb25zdGFudCBkZXBvc2l0cywgYW5kIG5lZ2F0aXZlIGRlcG9zaXRzIHRvIHNlcGFyYXRlIG5hdHVyYWwgZ3Jvd3RoIGZyb20gZm9yY2VkIGlucHV0LiJ9LCJzcGVjIjp7ImZyYW1ld29yayI6InJlYWN0IiwiY2FudmFzIjp0cnVlLCJiYWNrZ3JvdW5kIjoid2hpdGUiLCJsYXlvdXQiOiJ0d28gc3RhY2tlZCBzdGVtIHBsb3RzOiB4W25dIG9uIHRvcCwgeVtuXSBiZWxvdyIsImNvbnRyb2xzIjpbeyJpZCI6InIiLCJsYWJlbCI6IkludGVyZXN0IHJhdGUgciIsInR5cGUiOiJzbGlkZXIiLCJtaW4iOjAsIm1heCI6MC4xLCJzdGVwIjowLjAwNSwiZGVmYXVsdCI6MC4wNX0seyJpZCI6InlfaW5pdCIsImxhYmVsIjoiSW5pdGlhbCBiYWxhbmNlIHlbLTFdIiwidHlwZSI6Im51bWJlcl9pbnB1dCIsImRlZmF1bHQiOjB9LHsiaWQiOiJkZXBvc2l0cyIsImxhYmVsIjoiRGVwb3NpdHMgeFswXS4uLnhbOF0iLCJ0eXBlIjoiZWRpdGFibGVfc2VxdWVuY2UiLCJsZW5ndGgiOjksImRlZmF1bHQiOlsxMDAsMTAwLDEwMCwxMDAsMTAwLDEwMCwxMDAsMTAwLDEwMF19XSwicmVjdXJyZW5jZSI6Inlbbl0gPSAoMSArIHIpICogeVtuLTFdICsgeFtuXSIsImhpZ2hsaWdodCI6InZlcnRpY2FsIG1hcmtlciBvbiBjdXJyZW50IHN0ZXAgbiIsImNhbGN1bGF0aW9uX2NhcmQiOiJwcmV2aW91cyBiYWxhbmNlIMOXIGEgKyBjdXJyZW50IGRlcG9zaXQgPSBuZXcgYmFsYW5jZSIsImxhYmVscyI6IkVuZ2xpc2ggb25seSIsInN0eWxlIjoibWluaW1hbCBhY2FkZW1pYywgbm8gZGVjb3JhdGl2ZSBzdHlsaW5nIn0sIm9ic2VydmF0aW9uX3Byb21wdHMiOlsiV2hhdCBjaGFuZ2VzIHdoZW4gciBpbmNyZWFzZXMgYnV0IGRlcG9zaXRzIHN0YXkgZml4ZWQ/IiwiV2hhdCBoYXBwZW5zIHRvIHlbbl0gYWZ0ZXIgZGVwb3NpdHMgYmVjb21lIHplcm8/IiwiV2hpY2ggdGVybSBjYXJyaWVzIG1lbW9yeSBmcm9tIG9uZSBzYW1wbGUgdG8gdGhlIG5leHQ/Il19"></div>%%KC_END%%

## 2. Second-order systems: two-sample memory

This equation is **second-order** because computing the current output \(y[n]\) requires two past output samples: \(y[n-1]\) and \(y[n-2]\).

**Symbol definitions:**
- \(x[n]\) — current input sample
- \(y[n]\) — current output sample
- \(y[n-1]\), \(y[n-2]\) — output samples from one and two steps ago

### EXAM PATTERN

The **order** of a difference equation is determined by the largest delay on \(y\). Seeing \(y[n-2]\) immediately signals second-order.

### NEAR-MISS TO AVOID

An equation containing \(x[n-2]\) but only \(y[n-1]\) is **not** second-order — it is first-order in output memory. The classification counts delayed **output** terms, not delayed input terms.

### COMMON MISUSE

Do not count delayed input terms \(x[n-k]\) when determining the system order. The textbook classifies order by output recursion depth only.

#### Note
The advance form \(y[n+2] + \frac{1}{4}y[n+1] + \frac{1}{16}y[n] = x[n+2]\) is equivalent but shifts the index forward by 2.

$$y[n] + \frac{1}{4}y[n-1] + \frac{1}{16}y[n-2] = x[n]$$

## 3. Sampling notation: from continuous time to discrete indices

The bracket notation \(x[n]\) means: evaluate the continuous-time signal \(x(t)\) at the moment \(t = nT\). It is **not** multiplication of \(x\) by \(n\).

**Symbol definitions:**
- \(T\) — sampling period (time between consecutive samples)
- \(n\) — integer sample index (dimensionless)
- \(x[n]\) — sampled input value at time \(nT\)
- \(y[n]\) — sampled output value at time \(nT\)

**Minimal example:** If \(T = 0.01\) seconds, then \(x[5] = x(0.05)\) — the value of the continuous signal at \(t = 0.05\) s.

### EXAM TRIGGER

Any problem stating that a continuous-time signal is processed by a digital or discrete-time system requires this notation.

### COMMON MISUSE

- Treating \(nT\) as an exponent — it is a time value, not a power.
- Forgetting that \(n\) is dimensionless while \(nT\) carries units of time.

$$x[n] = x(nT), \quad y[n] = y(nT)$$

## 4. Digital differentiator: estimate slope from neighboring samples

This **backward-difference differentiator** approximates the derivative \(dx(t)/dt\) by comparing the current sample with the immediately preceding sample and dividing by the time spacing \(T\).

**Symbol definitions:**
- \(y[n]\) — derivative-like output at step \(n\)
- \(x[n]\) — current input sample
- \(x[n-1]\) — previous input sample
- \(T\) — sampling interval

**Minimal example:** If \(T = 1\) and \(x[n] - x[n-1] = 3\), then \(y[n] = 3\).

### EXAM TRIGGER

Phrases like "digital differentiator", "difference quotient", or "estimate rate of change from samples" point to this formula.

### COMMON MISUSE

Omitting the factor \(1/T\) gives change per sample, not change per unit time. The \(1/T\) factor is always required.

#### Note
The **forward-difference** form is \(y[n] = \frac{1}{T}\{x[n+1] - x[n]\}\) (equation 3.9). Both are valid differentiator approximations; the backward version uses only past and present samples.

$$y[n] = \frac{1}{T}\{x[n] - x[n-1]\}$$

## 5. Digital integrator: accumulation over samples

The digital integrator forms a **running weighted sum** of all input samples up to and including the current index \(n\). Each sample is weighted by the time spacing \(T\), approximating the area under the continuous-time signal.

**Symbol definitions:**
- \(y[n]\) — accumulated output at step \(n\)
- \(x[k]\) — input sample at index \(k\)
- \(k\) — summation index ranging from \(-\infty\) to \(n\)
- \(n\) — current time index
- \(T\) — sample spacing (time per sample)

**Minimal example:** If \(T = 1\) and past samples are \(2, 3, 4\), the accumulator output is \(1 \cdot (2 + 3 + 4) = 9\).

### EXAM TRIGGER

Words like "accumulator", "running sum", "area approximation", or "digital integrator" all point to this formula.

### COMMON MISUSE

Do not confuse with the differentiator: differentiators **subtract** nearby samples; integrators **add** past samples.

#### Equivalent difference equation

The same integrator can be written as the first-order recurrence:

$$y[n] - y[n-1] = Tx[n]$$

This form (3.11) makes it clear that each new output equals the previous output plus \(T\) times the current input.

$$y[n] = T\sum_{k=-\infty}^{n} x[k]$$

## 6. Discretized differential equation: continuous model becomes a recurrence

A continuous-time first-order differential equation can be approximated by a first-order discrete-time difference equation after sampling. The continuous model (3.12) is:

$$\frac{dy(t)}{dt} + cy(t) = x(t)$$

After discretization with sampling period \(T\), this becomes the recurrence (3.13) above.

**Symbol definitions:**
- \(y[n]\) — sampled output at step \(n\)
- \(y[n-1]\) — previous sampled output
- \(x[n]\) — sampled input at step \(n\)
- \(\alpha\), \(\beta\) — constants determined by \(c\) and \(T\)

**Parameter definitions:**

$$\alpha = \frac{-1}{1+cT}, \quad \beta = \frac{T}{1+cT}$$

Both \(\alpha\) and \(\beta\) depend on the continuous-time coefficient \(c\) and the sampling period \(T\). They are not arbitrary fitting constants.

### EXAM TRIGGER

A problem that starts with \(dy(t)/dt + cy(t) = x(t)\) and asks for a discrete-time equation is asking you to apply this bridge.

### COMMON MISUSE

Treating \(\alpha\) and \(\beta\) as free parameters to be chosen independently. They are both fixed once \(c\) and \(T\) are known.

$$y[n] + \alpha y[n-1] = \beta x[n]$$

---
**📌 Key Takeaways**
- **First-order savings recurrence (3.3):** \(y[n] - ay[n-1] = x[n]\), where \(a = 1+r\). Previous output \(y[n-1]\) carries memory; \(x[n]\) is the current deposit.
- **Advance form (3.4):** \(y[n+1] - ay[n] = x[n+1]\) — equivalent index-shifted version.
- **Second-order recurrence (3.5):** \(y[n] + \frac{1}{4}y[n-1] + \frac{1}{16}y[n-2] = x[n]\). Order = largest delay on \(y\); seeing \(y[n-2]\) means second-order.
- **Advance form (3.6):** \(y[n+2] + \frac{1}{4}y[n+1] + \frac{1}{16}y[n] = x[n+2]\).
- **Sampling notation (3.7):** \(x[n] = x(nT)\), \(y[n] = y(nT)\). Square brackets mean evaluate at \(t = nT\); \(n\) is dimensionless, \(nT\) has units of time.
- **Backward differentiator (3.8):** \(y[n] = \frac{1}{T}\{x[n] - x[n-1]\}\). The factor \(1/T\) converts sample difference to rate per unit time.
- **Forward differentiator (3.9):** \(y[n] = \frac{1}{T}\{x[n+1] - x[n]\}\). Uses future sample instead of past sample.
- **Digital integrator — accumulator form (3.10):** \(y[n] = T\displaystyle\sum_{k=-\infty}^{n} x[k]\). Running weighted sum of all past inputs.
- **Digital integrator — recurrence form (3.11):** \(y[n] - y[n-1] = Tx[n]\). Each output = previous output + \(T\) times current input.
- **Continuous-time bridge (3.12):** \(\frac{dy(t)}{dt} + cy(t) = x(t)\) is the source differential equation.
- **Discretized recurrence (3.13):** \(y[n] + \alpha y[n-1] = \beta x[n]\), with \(\alpha = \frac{-1}{1+cT}\) and \(\beta = \frac{T}{1+cT}\). Both parameters are determined by \(c\) and \(T\).
- **Key distinction:** Differentiators subtract neighboring samples; integrators accumulate past samples. Confusing the two is a common exam error.

*Next, these examples prepare us to classify discrete-time systems by properties such as linearity, time invariance, and memory.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NywicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo2LCJtYXgiOjh9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6ImZpcnN0X29yZGVyX3JlY3VycmVuY2UiLCJsYWJlbCI6IkZpcnN0LW9yZGVyIHNhdmluZ3MtYWNjb3VudCByZWN1cnJlbmNlIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AxX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJBIGJhbmsgYmFsYW5jZSBpcyB1cGRhdGVkIG9uY2UgcGVyIG1vbnRoLiBUaGUgcHJldmlvdXMgYmFsYW5jZSBlYXJucyBpbnRlcmVzdCBcXChyXFwpLCB0aGVuIHRoZSBuZXcgZGVwb3NpdCBcXCh4W25dXFwpIGlzIGFkZGVkLiBXaGljaCBlcXVhdGlvbiBtYXRjaGVzIHRoZSBtb2RlbD8iLCJvcHRpb25zIjpbIkEuIFxcKHlbbl0gLSAoMStyKXlbbi0xXSA9IHhbbl1cXCkiLCJCLiBcXCh5W25dIC0gcnlbbl0gPSB4W24tMV1cXCkiLCJDLiBcXCh5W25dID0geFtuXSAtICgxK3IpeVtuLTFdXFwpIiwiRC4gXFwoeVtuXSA9IHlbbi0xXSArIHJ4W25dXFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQSIsImV4cGxhbmF0aW9uIjoiVGhlIHByZXZpb3VzIGJhbGFuY2UgaXMgbXVsdGlwbGllZCBieSBcXCgxK3JcXCksIHRoZW4gdGhlIGN1cnJlbnQgZGVwb3NpdCBpcyBhZGRlZDogXFwoeVtuXSA9ICgxK3IpeVtuLTFdICsgeFtuXVxcKS4gUmVhcnJhbmdpbmcgZ2l2ZXMgXFwoeVtuXSAtICgxK3IpeVtuLTFdID0geFtuXVxcKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkIiOiJJbnRlcmVzdCBhcHBsaWVzIHRvIHRoZSBwcmV2aW91cyBiYWxhbmNlIFxcKHlbbi0xXVxcKSwgbm90IHRvIHRoZSBjdXJyZW50IG91dHB1dCBcXCh5W25dXFwpLCBhbmQgdGhlIGRlcG9zaXQgaXMgXFwoeFtuXVxcKSwgbm90IFxcKHhbbi0xXVxcKS4iLCJDIjoiVGhlIHByZXZpb3VzIGJhbGFuY2UgY29udHJpYnV0aW9uIHNob3VsZCBiZSBhZGRlZCwgbm90IHN1YnRyYWN0ZWQuIiwiRCI6IkludGVyZXN0IGlzIGVhcm5lZCBvbiB0aGUgcHJldmlvdXMgYmFsYW5jZSBcXCh5W24tMV1cXCksIG5vdCBvbiB0aGUgY3VycmVudCBkZXBvc2l0IFxcKHhbbl1cXCkuIn0sImhpbnQiOiJBc2sgd2hhdCBxdWFudGl0eSBleGlzdHMgYmVmb3JlIHRoZSBcXChuXFwpLXRoIGRlcG9zaXQgYXJyaXZlcy4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDFfcTIiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkluIFxcKHlbbl0gLSBheVtuLTFdID0geFtuXVxcKSwgd2l0aCBcXChhID0gMStyXFwpLCB3aGF0IGRvZXMgXFwoeVtuLTFdXFwpIHJlcHJlc2VudD8iLCJvcHRpb25zIjpbIkEuIFRoZSBwcmV2aW91cyBkZXBvc2l0IiwiQi4gVGhlIHByZXZpb3VzIGFjY291bnQgYmFsYW5jZSIsIkMuIFRoZSBjdXJyZW50IGFjY291bnQgYmFsYW5jZSBiZWZvcmUgaW50ZXJlc3QiLCJELiBUaGUgaW50ZXJlc3QgcmF0ZSBwZXIgcGVyaW9kIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiVGhlIHJlY3VycmVuY2Ugc3RvcmVzIG1lbW9yeSB0aHJvdWdoIHRoZSBwcmV2aW91cyBvdXRwdXQgXFwoeVtuLTFdXFwpLCB3aGljaCBpcyB0aGUgcHJldmlvdXMgYWNjb3VudCBiYWxhbmNlLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoZSBwcmV2aW91cyBkZXBvc2l0IHdvdWxkIGJlIFxcKHhbbi0xXVxcKSwgbm90IFxcKHlbbi0xXVxcKS4iLCJDIjoiXFwoeVtuXVxcKSBpcyB0aGUgY3VycmVudCBiYWxhbmNlIGFmdGVyIHRoZSBcXChuXFwpLXRoIGRlcG9zaXQgYWNjb3JkaW5nIHRvIHRoZSBtb2RlbC4iLCJEIjoiVGhlIGludGVyZXN0IHJhdGUgaXMgXFwoclxcKTsgdGhlIGdyb3d0aCBmYWN0b3IgaXMgXFwoYSA9IDErclxcKS4ifSwiaGludCI6Ik91dHB1dHMgdXNlIFxcKHlcXCk7IGlucHV0cyB1c2UgXFwoeFxcKS4iLCJuZWVkc192aXN1YWwiOnRydWUsInZpc3VhbF90eXBlIjoiaW50ZXJhY3RpdmVfZGVtb19zdGF0ZV90cmFjZSIsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfSx7ImlkIjoic2Vjb25kX29yZGVyX21lbW9yeSIsImxhYmVsIjoiU2Vjb25kLW9yZGVyIGRpZmZlcmVuY2UgZXF1YXRpb24iLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoibWVkaXVtIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoxfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwMl9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiV2h5IGlzIFxcKHlbbl0gKyBcXGZyYWN7MX17NH15W24tMV0gKyBcXGZyYWN7MX17MTZ9eVtuLTJdID0geFtuXVxcKSBjYWxsZWQgc2Vjb25kLW9yZGVyPyIsIm9wdGlvbnMiOlsiQS4gSXQgaGFzIHR3byBmcmFjdGlvbnMiLCJCLiBJdCBjb250YWlucyBcXCh4W25dXFwpIGFuZCBcXCh5W25dXFwpIiwiQy4gSXQgZGVwZW5kcyBvbiBvdXRwdXQgc2FtcGxlcyBhcyBmYXIgYmFjayBhcyBcXCh5W24tMl1cXCkiLCJELiBUaGUgbGFyZ2VzdCBjb2VmZmljaWVudCBkZW5vbWluYXRvciBpcyAxNiJdLCJjb3JyZWN0X29wdGlvbiI6IkMiLCJleHBsYW5hdGlvbiI6IlRoZSBvcmRlciBpcyBkZXRlcm1pbmVkIGJ5IGhvdyBtYW55IHBhc3Qgb3V0cHV0IHNhbXBsZXMgYXJlIG5lZWRlZC4gVGhlIHRlcm0gXFwoeVtuLTJdXFwpIHNob3dzIHR3by1zYW1wbGUgb3V0cHV0IG1lbW9yeS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJUaGUgbnVtYmVyIG9mIGZyYWN0aW9uYWwgY29lZmZpY2llbnRzIGlzIGlycmVsZXZhbnQgdG8gdGhlIHN5c3RlbSBvcmRlci4iLCJCIjoiTW9zdCBzeXN0ZW0gZXF1YXRpb25zIGNvbnRhaW4gYm90aCBpbnB1dCBhbmQgb3V0cHV0OyB0aGF0IGFsb25lIGRvZXMgbm90IGRldGVybWluZSBvcmRlci4iLCJEIjoiQ29lZmZpY2llbnQgc2l6ZSBkb2VzIG5vdCBkZXRlcm1pbmUgdGhlIG9yZGVyLiJ9LCJoaW50IjoiTG9vayBmb3IgdGhlIGxhcmdlc3QgZGVsYXkgb24gXFwoeVxcKS4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfV19LHsiaWQiOiJzYW1wbGluZ19ub3RhdGlvbiIsImxhYmVsIjoiU2FtcGxpbmcgbm90YXRpb24iLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6MX0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDNfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IklmIFxcKFQgPSAwLjAyXFwpIHNlY29uZHMsIHdoYXQgZG9lcyBcXCh4WzEwXVxcKSBtZWFuPyIsIm9wdGlvbnMiOlsiQS4gXFwoeCgxMClcXCkiLCJCLiBcXCh4KDAuMilcXCkiLCJDLiBcXCgxMCBcXGNkb3QgeChUKVxcKSIsIkQuIFxcKHhcXCkgcmFpc2VkIHRvIHRoZSAxMHRoIHBvd2VyIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiU2FtcGxpbmcgbm90YXRpb24gbWVhbnMgXFwoeFtuXSA9IHgoblQpXFwpLiBXaXRoIFxcKG4gPSAxMFxcKSBhbmQgXFwoVCA9IDAuMDJcXCksIHdlIGdldCBcXChuVCA9IDAuMlxcKSBzZWNvbmRzLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoYXQgd291bGQgb25seSBiZSB0cnVlIGlmIFxcKFQgPSAxXFwpIHNlY29uZC4iLCJDIjoiXFwoeFtuXVxcKSBpcyBhIHNhbXBsZWQgdmFsdWUsIG5vdCBtdWx0aXBsaWNhdGlvbiBieSBcXChuXFwpLiIsIkQiOiJTcXVhcmUgYnJhY2tldHMgaW5kaWNhdGUgYSBkaXNjcmV0ZS10aW1lIGluZGV4LCBub3QgYW4gZXhwb25lbnQuIn0sImhpbnQiOiJSZXBsYWNlIFxcKG5cXCkgYnkgMTAgaW4gXFwoeFtuXSA9IHgoblQpXFwpLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6ZmFsc2V9XX0seyJpZCI6ImRpZ2l0YWxfZGlmZmVyZW50aWF0b3IiLCJsYWJlbCI6IkJhY2t3YXJkIGFuZCBmb3J3YXJkIGRpZ2l0YWwgZGlmZmVyZW50aWF0b3JzIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3A0X3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJXaGljaCBleHByZXNzaW9uIGlzIHRoZSBiYWNrd2FyZC1kaWZmZXJlbmNlIGRpZ2l0YWwgZGlmZmVyZW50aWF0b3I/Iiwib3B0aW9ucyI6WyJBLiBcXCh5W25dID0gVFxce3hbbl0gLSB4W24tMV1cXH1cXCkiLCJCLiBcXCh5W25dID0gXFxmcmFjezF9e1R9XFx7eFtuXSAtIHhbbi0xXVxcfVxcKSIsIkMuIFxcKHlbbl0gPSBcXGZyYWN7MX17VH1cXHt4W24rMV0gLSB4W25dXFx9XFwpIiwiRC4gXFwoeVtuXSA9IFRcXGRpc3BsYXlzdHlsZVxcc3VtX3trPS1cXGluZnR5fV57bn0geFtrXVxcKSJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6IkJhY2t3YXJkIGRpZmZlcmVuY2UgdXNlcyB0aGUgY3VycmVudCBhbmQgcHJldmlvdXMgc2FtcGxlcywgXFwoeFtuXSAtIHhbbi0xXVxcKSwgYW5kIGRpdmlkZXMgYnkgXFwoVFxcKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJUaGUgc2NhbGUgZmFjdG9yIGlzIFxcKDEvVFxcKSwgbm90IFxcKFRcXCkuIiwiQyI6IlRoYXQgaXMgdGhlIGZvcndhcmQtZGlmZmVyZW5jZSB2ZXJzaW9uLCB3aGljaCB1c2VzIHRoZSBuZXh0IHNhbXBsZSBcXCh4W24rMV1cXCkuIiwiRCI6IlRoYXQgaXMgdGhlIGRpZ2l0YWwgaW50ZWdyYXRvciwgbm90IGEgZGlmZmVyZW50aWF0b3IuIn0sImhpbnQiOiJCYWNrd2FyZCBtZWFucyBjb21wYXJlIGN1cnJlbnQgd2l0aCBwcmV2aW91czsgZGVyaXZhdGl2ZSBtZWFucyBkaXZpZGUgYnkgdGltZSBpbnRlcnZhbC4iLCJuZWVkc192aXN1YWwiOnRydWUsInZpc3VhbF90eXBlIjoic2FtcGxlX3BhaXJfY29tcGFyaXNvbiIsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwNF9xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiQSBzdHVkZW50IHNheXMgdGhlIGZhY3RvciBcXCgxL1RcXCkgaXMgb3B0aW9uYWwgYmVjYXVzZSBcXCh4W25dIC0geFtuLTFdXFwpIGFscmVhZHkgbWVhc3VyZXMgY2hhbmdlLiBXaHkgaXMgdGhpcyB3cm9uZz8iLCJvcHRpb25zIjpbIkEuIFdpdGhvdXQgXFwoMS9UXFwpLCB0aGUgZXhwcmVzc2lvbiBtZWFzdXJlcyBjaGFuZ2UgcGVyIHNhbXBsZSwgbm90IGNoYW5nZSBwZXIgdW5pdCB0aW1lIiwiQi4gV2l0aG91dCBcXCgxL1RcXCksIHRoZSBleHByZXNzaW9uIGJlY29tZXMgYW4gaW50ZWdyYXRvciIsIkMuIFRoZSBmYWN0b3Igc2hvdWxkIGFjdHVhbGx5IGJlIFxcKFReMlxcKSIsIkQuIFRoZSBmYWN0b3IgaXMgb25seSBuZWVkZWQgd2hlbiBcXCh4W25dXFwpIGlzIG5lZ2F0aXZlIl0sImNvcnJlY3Rfb3B0aW9uIjoiQSIsImV4cGxhbmF0aW9uIjoiQSBkZXJpdmF0aXZlIGlzIGEgcmF0ZSBvZiBjaGFuZ2UgcGVyIHVuaXQgdGltZS4gVGhlIHNhbXBsZSBkaWZmZXJlbmNlIG11c3QgYmUgZGl2aWRlZCBieSB0aGUgdGltZSBzcGFjaW5nIFxcKFRcXCkgdG8gY29udmVydCBmcm9tIGNoYW5nZS1wZXItc2FtcGxlIHRvIGNoYW5nZS1wZXItc2Vjb25kLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQiI6IkFuIGludGVncmF0b3IgYWNjdW11bGF0ZXMgc2FtcGxlczsgbWlzc2luZyBcXCgxL1RcXCkgZG9lcyBub3QgYXV0b21hdGljYWxseSBjcmVhdGUgYW4gaW50ZWdyYXRvci4iLCJDIjoiVGhlIHN0YW5kYXJkIGRpZmZlcmVuY2UgcXVvdGllbnQgdXNlcyBkaXZpc2lvbiBieSBcXChUXFwpLCBub3QgbXVsdGlwbGljYXRpb24gYnkgXFwoVF4yXFwpLiIsIkQiOiJUaGUgc2NhbGUgZmFjdG9yIGlzIHJlcXVpcmVkIHJlZ2FyZGxlc3Mgb2YgdGhlIHNpZ24gb2YgdGhlIHNhbXBsZXMuIn0sImhpbnQiOiJEZXJpdmF0aXZlIG1lYW5zIGNoYW5nZSBkaXZpZGVkIGJ5IHRpbWUgaW50ZXJ2YWwuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfV19LHsiaWQiOiJkaWdpdGFsX2ludGVncmF0b3JfYW5kX2Rpc2NyZXRpemVkX21vZGVsIiwibGFiZWwiOiJEaWdpdGFsIGludGVncmF0b3IgYW5kIGRpc2NyZXRpemVkIGZpcnN0LW9yZGVyIG1vZGVsIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjF9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3A1X3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJXaGljaCBjbHVlIG1vc3Qgc3Ryb25nbHkgaW5kaWNhdGVzIGEgZGlnaXRhbCBpbnRlZ3JhdG9yPyIsIm9wdGlvbnMiOlsiQS4gSXQgc3VidHJhY3RzIFxcKHhbbi0xXVxcKSBmcm9tIFxcKHhbbl1cXCkiLCJCLiBJdCBjb21wdXRlcyBhIHJ1bm5pbmcgc3VtIG9mIHBhc3QgaW5wdXQgc2FtcGxlcyIsIkMuIEl0IHVzZXMgb25seSBcXCh4W24rMV1cXCkiLCJELiBJdCBoYXMgbm8gb3V0cHV0IFxcKHlbbl1cXCkiXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJBIGRpZ2l0YWwgaW50ZWdyYXRvciBhY2N1bXVsYXRlcyBpbnB1dCBzYW1wbGVzLCBjb21tb25seSB3cml0dGVuIFxcKHlbbl0gPSBUXFxkaXNwbGF5c3R5bGVcXHN1bV97az0tXFxpbmZ0eX1ee259IHhba11cXCkuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiU3VidHJhY3RpbmcgXFwoeFtuLTFdXFwpIGZyb20gXFwoeFtuXVxcKSBpcyB0aGUgc3RydWN0dXJlIG9mIGEgZGlmZmVyZW50aWF0b3IuIiwiQyI6IlVzaW5nIFxcKHhbbisxXVxcKSBzdWdnZXN0cyBhIGZvcndhcmQgZGlmZmVyZW5jZSwgbm90IGludGVncmF0aW9uLiIsIkQiOiJBIHN5c3RlbSBtb2RlbCBzdGlsbCBoYXMgYW4gb3V0cHV0IFxcKHlbbl1cXCkuIn0sImhpbnQiOiJJbnRlZ3JhdG9yIG1lYW5zIGFjY3VtdWxhdGlvbiBvZiBwYXN0IHZhbHVlcy4iLCJuZWVkc192aXN1YWwiOnRydWUsInZpc3VhbF90eXBlIjoicnVubmluZ19zdW1fc3RlbV9wbG90Iiwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX0seyJpZCI6ImtwNV9xMiIsInR5cGUiOiJzaG9ydF9hbnN3ZXIiLCJzdGVtIjoiVGhlIGNvbnRpbnVvdXMtdGltZSBlcXVhdGlvbiBcXChcXGZyYWN7ZHkodCl9e2R0fSArIGN5KHQpID0geCh0KVxcKSBpcyBkaXNjcmV0aXplZCBhcyBcXCh5W25dICsgXFxhbHBoYSB5W24tMV0gPSBcXGJldGEgeFtuXVxcKS4gU3RhdGUgd2hhdCBcXChcXGFscGhhXFwpIGFuZCBcXChcXGJldGFcXCkgZGVwZW5kIG9uLiIsImlkZWFsX2Fuc3dlciI6IlRoZXkgZGVwZW5kIG9uIHRoZSBjb250aW51b3VzLXRpbWUgY29lZmZpY2llbnQgXFwoY1xcKSBhbmQgdGhlIHNhbXBsaW5nIHBlcmlvZCBcXChUXFwpOiBcXChcXGFscGhhID0gXFxmcmFjey0xfXsxK2NUfVxcKSBhbmQgXFwoXFxiZXRhID0gXFxmcmFje1R9ezErY1R9XFwpLiIsImdyYWRpbmdfcnVicmljIjpbIk11c3Qgc3RhdGUgdGhhdCBcXChcXGFscGhhXFwpIGRlcGVuZHMgb24gXFwoY1xcKSBhbmQgXFwoVFxcKSIsIk11c3Qgc3RhdGUgdGhhdCBcXChcXGJldGFcXCkgZGVwZW5kcyBvbiBcXChjXFwpIGFuZCBcXChUXFwpIiwiRnVsbCBjcmVkaXQgcmVxdWlyZXMgdGhlIGZvcm11bGFzIFxcKFxcYWxwaGEgPSBcXGZyYWN7LTF9ezErY1R9XFwpIGFuZCBcXChcXGJldGEgPSBcXGZyYWN7VH17MStjVH1cXCkiLCJEbyBub3QgZ2l2ZSBjcmVkaXQgaWYgXFwoXFxhbHBoYVxcKSBhbmQgXFwoXFxiZXRhXFwpIGFyZSBkZXNjcmliZWQgYXMgYXJiaXRyYXJ5IGZpdHRpbmcgY29uc3RhbnRzIG9ubHkiXSwiZXhwbGFuYXRpb24iOiJUaGlzIGNoZWNrcyB3aGV0aGVyIHRoZSBzdHVkZW50IHVuZGVyc3RhbmRzIHRoZSBicmlkZ2UgZnJvbSBjb250aW51b3VzLXRpbWUgcGFyYW1ldGVycyB0byB0aGUgZGlzY3JldGUtdGltZSByZWN1cnJlbmNlLiIsImhpbnQiOiJMb29rIGZvciBcXChjXFwpIGFuZCBcXChUXFwpIGluIHRoZSBwYXJhbWV0ZXIgZGVmaW5pdGlvbnMuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX1dfV19" style="display:none;"></div>%%KC_END%%
