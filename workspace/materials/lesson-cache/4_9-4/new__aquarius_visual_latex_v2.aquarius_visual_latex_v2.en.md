%%KC_BLOCK%%<div class="kc-visual-plan" data-visual-plan-b64="eyJwcmltYXJ5X2FuY2hvciI6InJlYWN0X2RlbW8iLCJyYXRpb25hbGUiOiJUaGlzIHNlY3Rpb24gaXMgZHJpdmVuIGJ5IGhvdyB0aGUgZGFtcGluZyByYXRpbyBcXChcXHpldGFcXCkgY2hhbmdlcyB0aGUgQm9kZSBtYWduaXR1ZGUgYW5kIHBoYXNlIGN1cnZlcyBuZWFyIFxcKFxcb21lZ2FfblxcKS4gVGhlIE9DUiByZWZlcmVuY2VzIHRleHRib29rIEZpZ3VyZXMgNC40MyBhbmQgNC40NCwgYnV0IG5vIGNyb3BwZWQgZmlndXJlIGFzc2V0cyBhcmUgc3VwcGxpZWQsIGFuZCBmdWxsLXBhZ2Ugc2NyZWVuc2hvdHMgbXVzdCBub3QgYmUgdXNlZC4gQSBSZWFjdCArIENhbnZhcyBkZW1vIGlzIHRoZSBzdHJvbmdlc3QgdGVhY2hpbmcgYXNzZXQgYmVjYXVzZSBzdHVkZW50cyBuZWVkIHRvIHNlZSByZXNvbmFuY2UgZ3JvdyBvciBkaXNhcHBlYXIgYXMgXFwoXFx6ZXRhXFwpIGNoYW5nZXMuIiwiY3JhbSI6IlVzZSB0aGUgZGVtbyB0byBtZW1vcml6ZSB0aGUgZXhhbSB0cmlnZ2Vyczogc2Vjb25kLW9yZGVyIHBvbGUgbWVhbnMg4oiSNDAgZEIvZGVjYWRlIGFmdGVyIFxcKFxcb21lZ2FfblxcKSwgcGhhc2UgbW92ZXMgdG93YXJkIOKIkjE4MMKwLCBhbmQgc21hbGwgXFwoXFx6ZXRhXFwpIGNyZWF0ZXMgcmVzb25hbmNlLiIsInN0YW5kYXJkIjoiVXNlIHRoZSBkZW1vIHRvIGNvbm5lY3QgZWFjaCBmb3JtdWxhIHRvIG9uZSByZXByZXNlbnRhdGl2ZSBjdXJ2ZSBhbmQgb25lIGFzeW1wdG90aWMgc2tldGNoLiIsInRvcF9zY29yZSI6IlVzZSB0aGUgZGVtbyB0byBjb21wYXJlIGV4YWN0IGN1cnZlcywgYXN5bXB0b3RlcywgZXJyb3IgbmVhciBcXChcXG9tZWdhX25cXCksIHBvbGUtdnMtemVybyBtaXJyb3JpbmcsIGFuZCB0aGUgaGlnaC1yaXNrIFxcKFxcemV0YT0wLjcwN1xcKSBib3VuZGFyeS4ifQ==" style="display:none;"></div>%%KC_END%%
# Second-Order Pole (or Zero)

> **Section Objective:** Learn how a second-order pole or zero changes a Bode magnitude and phase plot.

---

**Concepts In This Section**

- Standard second-order form
- Natural frequency
- Damping ratio
- Magnitude asymptote
- Resonance correction
- Phase asymptote
- Second-order zero mirror rule

## 1. Standard Second-Order Form

When a transfer function contains a quadratic denominator factor \(s^2 + b_2 s + b_3\), the textbook rewrites it in this standard form so that two key parameters become visible: the **natural frequency** \(\omega_n\) and the **damping ratio** \(\zeta\). These two numbers fully control the shape of the Bode magnitude and phase curves.

**When to use it:** Any time a quadratic factor appears in a transfer-function denominator (pole) or numerator (zero).

**Minimal example:** Given \(s^2 + 2s + 100\), match term by term:

$$\omega_n^2 = 100 \implies \omega_n = 10 \text{ rad/s}$$

$$2\zeta\omega_n = 2 \implies \zeta = \frac{2}{2 \times 10} = 0.1$$

### COMMON MISUSE

Do **not** treat a complex-conjugate pole pair as two independent first-order corner frequencies. The interaction between the two poles through \(\zeta\) creates resonance behavior that a simple first-order decomposition misses entirely.

$$s^2 + 2\zeta\omega_n s + \omega_n^2$$

%%KC_BLOCK%%<div class="kc-visual-meta" data-visual-kind="interactive_demo" data-teaching-role="concept_anchor" data-visual-use-b64="eyJjcmFtIjoiRHJhZyBcXChcXHpldGFcXCkgYW5kIG1lbW9yaXplIHdoYXQgaGFwcGVucyBhdCBcXChcXG9tZWdhX25cXCk6IHJlc29uYW5jZSBwZWFrLCBcXCgtNDBcXCkgZEIvZGVjYWRlIHNsb3BlLCBhbmQgcGhhc2UgZHJvcCB0b3dhcmQgXFwoLTE4MF5cXGNpcmNcXCkuIiwic3RhbmRhcmQiOiJDb21wYXJlIHRoZSBleGFjdCBtYWduaXR1ZGUgYW5kIHBoYXNlIGN1cnZlcyBhZ2FpbnN0IHRoZSBkYXNoZWQgYXN5bXB0b3RlcyBmb3IgXFwoXFx6ZXRhID0gMC4xXFwpLCBcXCgwLjVcXCksIFxcKDAuNzA3XFwpLCBhbmQgXFwoMVxcKS4iLCJ0b3Bfc2NvcmUiOiJVc2UgdGhlIHBvbGUvemVybyB0b2dnbGUgYW5kIGVycm9yIG92ZXJsYXkgdG8gc2VlIHdoeSBjb3JyZWN0aW9ucyBhcmUgbGFyZ2VzdCBuZWFyIFxcKFxcb21lZ2FfblxcKSBhbmQgd2h5IHplcm9zIG1pcnJvciBwb2xlcyBleGFjdGx5LiJ9" style="display:none;"></div><div class="kc-interactive-demo" data-demo-b64="eyJ0eXBlIjoiaW50ZXJhY3RpdmVfZGVtbyIsInRpdGxlIjoiU2Vjb25kLU9yZGVyIFBvbGUgQm9kZSBDdXJ2ZXMg4oCUIENvbnRyb2xsZWQgYnkgRGFtcGluZyBSYXRpbyIsInRlYWNoaW5nX3JvbGUiOiJjb25jZXB0X2FuY2hvciIsIm1vZGVfc3BlY2lmaWNfdmlzdWFsX3VzZSI6eyJjcmFtIjoiRHJhZyBcXChcXHpldGFcXCkgYW5kIG1lbW9yaXplIHdoYXQgaGFwcGVucyBhdCBcXChcXG9tZWdhX25cXCk6IHJlc29uYW5jZSBwZWFrLCBcXCgtNDBcXCkgZEIvZGVjYWRlIHNsb3BlLCBhbmQgcGhhc2UgZHJvcCB0b3dhcmQgXFwoLTE4MF5cXGNpcmNcXCkuIiwic3RhbmRhcmQiOiJDb21wYXJlIHRoZSBleGFjdCBtYWduaXR1ZGUgYW5kIHBoYXNlIGN1cnZlcyBhZ2FpbnN0IHRoZSBkYXNoZWQgYXN5bXB0b3RlcyBmb3IgXFwoXFx6ZXRhID0gMC4xXFwpLCBcXCgwLjVcXCksIFxcKDAuNzA3XFwpLCBhbmQgXFwoMVxcKS4iLCJ0b3Bfc2NvcmUiOiJVc2UgdGhlIHBvbGUvemVybyB0b2dnbGUgYW5kIGVycm9yIG92ZXJsYXkgdG8gc2VlIHdoeSBjb3JyZWN0aW9ucyBhcmUgbGFyZ2VzdCBuZWFyIFxcKFxcb21lZ2FfblxcKSBhbmQgd2h5IHplcm9zIG1pcnJvciBwb2xlcyBleGFjdGx5LiJ9LCJkZW1vX3NwZWMiOnsiZnJhbWV3b3JrIjoiUmVhY3QgKyBDYW52YXMiLCJsYXlvdXQiOiJ0d28gc3RhY2tlZCBCb2RlIHBsb3RzIHNoYXJpbmcgYSBsb2dhcml0aG1pYyBmcmVxdWVuY3kgYXhpcyIsImZyZXF1ZW5jeV9heGlzX2xhYmVscyI6WyIwLjHPiW4iLCIwLjLPiW4iLCIwLjXPiW4iLCLPiW4iLCIyz4luIiwiNc+JbiIsIjEwz4luIl0sInRvcF9wbG90IjoiTWFnbml0dWRlIGluIGRCIiwiYm90dG9tX3Bsb3QiOiJQaGFzZSBpbiBkZWdyZWVzIiwiY29udHJvbHMiOlt7Im5hbWUiOiJ6ZXRhIiwicmFuZ2UiOlswLjA1LDEuNV0sInR5cGUiOiJzbGlkZXIiLCJsYWJlbCI6IkRhbXBpbmcgcmF0aW8gzrYifSx7Im5hbWUiOiJvbWVnYV9uIiwicmFuZ2UiOlsxLDEwMF0sInR5cGUiOiJzbGlkZXIiLCJsYWJlbCI6Ik5hdHVyYWwgZnJlcXVlbmN5IM+JbiAocmFkL3MpIn0seyJuYW1lIjoibW9kZSIsIm9wdGlvbnMiOlsic2Vjb25kLW9yZGVyIHBvbGUiLCJzZWNvbmQtb3JkZXIgemVybyJdLCJ0eXBlIjoidG9nZ2xlIn1dLCJjdXJ2ZV9zdHlsZXMiOnsiZXhhY3RfY3VydmUiOiJuYXZ5IHNvbGlkIiwiYXN5bXB0b3RlIjoiZGFzaGVkIGdyYXkiLCJvbWVnYV9uX21hcmtlciI6InZlcnRpY2FsIG11dGVkLXRlYWwgbGluZSJ9LCJwb2xlX21vZGUiOnsibWFnbml0dWRlX2FzeW1wdG90ZSI6IjAgZEIgYmVmb3JlIM+Jbjsg4oiSNDAgZEIvZGVjYWRlIGFmdGVyIM+JbiIsInBoYXNlX2FzeW1wdG90ZSI6InN0ZXAgZnJvbSAwwrAgdG8g4oiSMTgwwrAgYXQgz4luIn0sInplcm9fbW9kZSI6eyJtYWduaXR1ZGVfYXN5bXB0b3RlIjoibWlycm9yIG9mIHBvbGU6IDAgZEIgYmVmb3JlIM+JbjsgKzQwIGRCL2RlY2FkZSBhZnRlciDPiW4iLCJwaGFzZV9hc3ltcHRvdGUiOiJzdGVwIGZyb20gMMKwIHRvICsxODDCsCBhdCDPiW4ifSwicmVhZG91dCI6WyJjdXJyZW50IM62IiwicmVzb25hbmNlIHZpc2libGU6IHllcy9ubyIsImV4YWN0IG1hZ25pdHVkZSBhdCDPiSA9IM+JbiAoZEIpIiwiZXhhY3QgcGhhc2UgbmVhciDPiW4gKGRlZ3JlZXMpIl19LCJzdHVkZW50X3Rhc2tzIjpbIlNldCBcXChcXHpldGEgPSAwLjFcXCkgYW5kIG5vdGljZSB0aGUgc2hhcnAgcmVzb25hbmNlIHBlYWsgbmVhciBcXChcXG9tZWdhX25cXCkuIiwiU2V0IFxcKFxcemV0YSA9IDFcXCkgYW5kIG5vdGljZSB0aGF0IHRoZSByZXNvbmFuY2UgcGVhayBkaXNhcHBlYXJzLiIsIlRvZ2dsZSBmcm9tIHBvbGUgdG8gemVybyBhbmQgb2JzZXJ2ZSB0aGF0IHRoZSBtYWduaXR1ZGUgYW5kIHBoYXNlIHNpZ25zIHJldmVyc2UuIiwiQ29tcGFyZSB0aGUgZXhhY3QgbmF2eSBjdXJ2ZSB3aXRoIHRoZSBkYXNoZWQgYXN5bXB0b3RlIG5lYXIgXFwoXFxvbWVnYV9uXFwpLCB3aGVyZSB0aGUgZXJyb3IgaXMgbW9zdCBpbXBvcnRhbnQuIl0sImZhbGxiYWNrX3N0YXRpY19pbnN0cnVjdGlvbiI6IklmIHRoZSBpbnRlcmFjdGl2ZSBkZW1vIGNhbm5vdCByZW5kZXIsIGRpc3BsYXkgYSBzdGF0aWMgdHdvLXBhbmVsIEJvZGUgcGxvdCBzaG93aW5nIGV4YWN0IGN1cnZlcyBhbmQgYXN5bXB0b3RlcyBmb3IgXFwoXFx6ZXRhID0gMC4xXFwpLCBcXCgwLjVcXCksIFxcKDAuNzA3XFwpLCBhbmQgXFwoMVxcKSwgd2l0aCBleGFjdCBjdXJ2ZXMgaW4gbmF2eSBhbmQgYXN5bXB0b3RlcyBpbiBkYXNoZWQgZ3JheS4ifQ=="></div>%%KC_END%%

## 2. Exact Log Magnitude for a Second-Order Pole

\(L_p(\omega)\) is the pole's contribution to the Bode magnitude plot, measured in dB. The variables are:

- \(\omega\): the input frequency in rad/s
- \(\omega_n\): the natural frequency
- \(\zeta\): the damping ratio
- \(j\): the imaginary unit (\(j = \sqrt{-1}\))

**When to use it:** Use Eq. (4.49) when the exam asks for the exact curve or a correction near \(\omega_n\), not just a straight-line sketch.

**Exam trigger:** A denominator factor matching \(s^2 + 2\zeta\omega_n s + \omega_n^2\).

### COMMON MISUSE

Do **not** forget the negative sign in front. A pole **reduces** magnitude at high frequencies. Omitting the minus sign would give a zero contribution instead of a pole contribution.

$$\text{(4.49)}\quad L_p(\omega) = -20\log_{10}\left|1 + 2j\zeta\frac{\omega}{\omega_n} + \left(j\frac{\omega}{\omega_n}\right)^2\right|$$

## 3. Magnitude asymptote

This is the fully expanded real-valued form of Eq. (4.49), used to plot the exact family of magnitude curves for different values of \(\zeta\).

**Key insight at \(\omega = \omega_n\):** The first squared term becomes \(\left(1 - 1\right)^2 = 0\), so only the damping term survives:

$$L_p(\omega_n) = -20\log_{10}\left(2\zeta\right)$$

This means the correction at \(\omega_n\) depends entirely on \(\zeta\). Small \(\zeta\) produces a large resonance peak; for \(\zeta > 0.707\) the resonance is barely noticeable.

### COMMON MISUSE

Do **not** assume every second-order pole has the same correction at \(\omega_n\). The correction is \(\zeta\)-dependent — always check the damping ratio before estimating the peak.

$$\text{(4.51)}\quad L_p(\omega) = -20\log_{10}\left(\left[\left(1 - \left(\frac{\omega}{\omega_n}\right)^2\right)^2 + 4\zeta^2\left(\frac{\omega}{\omega_n}\right)^2\right]^{1/2}\right)$$

## 4. Phase of a second-order pole

The straight-line Bode approximation for a second-order pole is:

- **Before \(\omega_n\):** flat at \(0\) dB
- **After \(\omega_n\):** drops at \(-40\) dB/decade (equivalently, \(-12\) dB/octave)

This slope is **twice** the \(-20\) dB/decade of a single first-order pole, because a second-order pole represents a conjugate pair — two pole contributions acting together.

**Use case:** Quick hand sketch of the Bode magnitude plot.

**Exam trigger:** A complex-conjugate pole pair or a normalized quadratic denominator.

**Minimal example:** If \(\omega_n = 10\) rad/s, the downward \(-40\) dB/decade line begins at \(\omega = 10\) rad/s.

### COMMON MISUSE

Two frequent errors: (1) starting the \(-40\) dB/decade line at the wrong frequency (e.g., at \(\omega_n^2\) instead of \(\omega_n\)), and (2) using only \(-20\) dB/decade, which is the slope for a single first-order pole.

$$L_{p,\text{asymp}}(\omega) = \begin{cases} 0, & \omega < \omega_n \\ -40\log_{10}\!\left(\dfrac{\omega}{\omega_n}\right), & \omega > \omega_n \end{cases}$$

## 5. Second-order zeros mirror second-order poles

The exact phase contribution of a second-order pole moves continuously from near \(0^\circ\) at low frequencies toward \(-180^\circ\) at high frequencies:

- For \(\omega \ll \omega_n\): phase \(\approx 0^\circ\)
- At \(\omega = \omega_n\): phase \(= -90^\circ\) exactly (for all \(\zeta\))
- For \(\omega \gg \omega_n\): phase \(\to -180^\circ\)

**Quadrant warning:** The denominator \(1 - (\omega/\omega_n)^2\) changes sign when \(\omega\) crosses \(\omega_n\). The arctangent must be evaluated in the correct quadrant — use a four-quadrant inverse tangent (atan2) to avoid a sign error near \(\omega_n\).

**Simple asymptote:** A step from \(0^\circ\) to \(-180^\circ\) at \(\omega_n\).

**Use case:** Fast Bode phase sketch for a complex-conjugate pole pair.

### COMMON MISUSE

Do **not** stop at \(-90^\circ\). That is the final phase of a single first-order pole. A second-order pole pair contributes a total of \(-180^\circ\) at high frequency — twice as much.

$$\text{(4.52)}\quad \angle H_p(j\omega) = -\tan^{-1}\!\left(\frac{2\zeta\left(\omega/\omega_n\right)}{1 - \left(\omega/\omega_n\right)^2}\right)$$

## 5. Second-Order Zeros Mirror Second-Order Poles

For a left-half-plane complex-conjugate zero factor with the same \(\omega_n\) and \(\zeta\), the Bode plots are exact mirror images of the corresponding pole plots:

$$L_z(\omega) = -L_p(\omega) \quad \phi_z(\omega) = -\phi_p(\omega)$$

- **Magnitude:** reflects about the \(0\) dB line — where the pole drops, the zero rises by the same amount.
- **Phase:** sign reverses — where the pole contributes negative phase, the zero contributes positive phase.

**Minimal example:** A second-order pole pair contributes \(-40\) dB/decade after \(\omega_n\). The matching zero pair contributes \(+40\) dB/decade after \(\omega_n\).

### COMMON TRAP

Do **not** copy the pole phase drop for a zero. The zero phase goes from \(0^\circ\) toward \(+180^\circ\), not toward \(-180^\circ\). Flipping the sign is the entire rule.

---
**📌 Key Takeaways**
- **Standard form:** A quadratic factor \(s^2 + 2\zeta\omega_n s + \omega_n^2\) defines the natural frequency \(\omega_n\) and damping ratio \(\zeta\). Example: \(s^2 + 2s + 100 \Rightarrow \omega_n = 10\), \(\zeta = 0.1\).
- **Exact magnitude (Eq. 4.49 / 4.51):** \(L_p(\omega) = -20\log_{10}\left|1 + 2j\zeta(\omega/\omega_n) + (j\omega/\omega_n)^2\right|\); real-valued form: \(L_p(\omega) = -20\log_{10}\!\left(\left[(1-(\omega/\omega_n)^2)^2 + 4\zeta^2(\omega/\omega_n)^2\right]^{1/2}\right)\). At \(\omega = \omega_n\): \(L_p = -20\log_{10}(2\zeta)\) — correction depends entirely on \(\zeta\).
- **Magnitude asymptote:** \(L_{p,\text{asymp}} = 0\) dB for \(\omega < \omega_n\); \(L_{p,\text{asymp}} = -40\log_{10}(\omega/\omega_n)\) dB for \(\omega > \omega_n\). Slope is \(-40\) dB/decade — twice the first-order pole slope. Corner is at \(\omega_n\), not \(\omega_n^2\).
- **Phase (Eq. 4.52):** \(\angle H_p(j\omega) = -\tan^{-1}\!\left(\dfrac{2\zeta(\omega/\omega_n)}{1-(\omega/\omega_n)^2}\right)\). Moves from \(0^\circ\) toward \(-180^\circ\); asymptote is a step from \(0^\circ\) to \(-180^\circ\) at \(\omega_n\). Use four-quadrant atan2 near \(\omega_n\). Do not stop at \(-90^\circ\).
- **Zero mirror rule:** \(L_z(\omega) = -L_p(\omega)\) and \(\phi_z(\omega) = -\phi_p(\omega)\). A second-order zero gives \(+40\) dB/decade after \(\omega_n\) and phase rising toward \(+180^\circ\). Small \(\zeta\) creates a resonance peak (pole) or anti-resonance dip (zero) near \(\omega_n\); for \(\zeta > 0.707\) the resonance is barely noticeable.

*Next, we use Bode plots to infer transfer functions from frequency-response data.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NywicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo2LCJtYXgiOjh9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6InN0YW5kYXJkX3NlY29uZF9vcmRlcl9mb3JtIiwibGFiZWwiOiJSZWNvZ25pemluZyBcXChcXG9tZWdhX25cXCkgYW5kIFxcKFxcemV0YVxcKSBmcm9tIHRoZSBzdGFuZGFyZCBmb3JtIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AxX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJBIGRlbm9taW5hdG9yIGlzIFxcKHNeMiArIDJzICsgMTAwXFwpLiBNYXRjaGluZyBpdCB0byBcXChzXjIgKyAyXFx6ZXRhXFxvbWVnYV9uIHMgKyBcXG9tZWdhX25eMlxcKSwgd2hhdCBhcmUgXFwoXFxvbWVnYV9uXFwpIGFuZCBcXChcXHpldGFcXCk/Iiwib3B0aW9ucyI6WyJBLiBcXChcXG9tZWdhX24gPSAxMDBcXCksIFxcKFxcemV0YSA9IDAuMDFcXCkiLCJCLiBcXChcXG9tZWdhX24gPSAxMFxcKSwgXFwoXFx6ZXRhID0gMC4xXFwpIiwiQy4gXFwoXFxvbWVnYV9uID0gMTBcXCksIFxcKFxcemV0YSA9IDFcXCkiLCJELiBcXChcXG9tZWdhX24gPSAyXFwpLCBcXChcXHpldGEgPSAyNVxcKSJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6IlNpbmNlIFxcKFxcb21lZ2Ffbl4yID0gMTAwXFwpLCB3ZSBnZXQgXFwoXFxvbWVnYV9uID0gMTBcXCkuIFRoZW4gXFwoMlxcemV0YVxcb21lZ2FfbiA9IDJcXCksIHNvIFxcKDIwXFx6ZXRhID0gMlxcKSwgZ2l2aW5nIFxcKFxcemV0YSA9IDAuMVxcKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJUaGlzIHRyZWF0cyBcXCgxMDBcXCkgYXMgXFwoXFxvbWVnYV9uXFwpIGRpcmVjdGx5LCBidXQgXFwoMTAwID0gXFxvbWVnYV9uXjJcXCksIHNvIFxcKFxcb21lZ2FfbiA9IDEwXFwpLiIsIkMiOiJUaGlzIGdldHMgXFwoXFxvbWVnYV9uID0gMTBcXCkgY29ycmVjdGx5IGJ1dCBpZ25vcmVzIHRoZSBjb2VmZmljaWVudCBlcXVhdGlvbiBcXCgyXFx6ZXRhXFxvbWVnYV9uID0gMlxcKS4iLCJEIjoiVGhpcyBpbmNvcnJlY3RseSB0cmVhdHMgdGhlIGNvZWZmaWNpZW50IG9mIFxcKHNcXCkgYXMgXFwoXFxvbWVnYV9uXFwpLiJ9LCJoaW50IjoiRmlyc3QgdXNlIHRoZSBjb25zdGFudCB0ZXJtIHRvIGZpbmQgXFwoXFxvbWVnYV9uXFwpLCB0aGVuIHVzZSB0aGUgY29lZmZpY2llbnQgb2YgXFwoc1xcKSB0byBmaW5kIFxcKFxcemV0YVxcKS4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDFfcTIiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IldoaWNoIHRyYW5zZmVyLWZ1bmN0aW9uIGZhY3RvciBzaG91bGQgdHJpZ2dlciB0aGUgc2Vjb25kLW9yZGVyIEJvZGUgcnVsZXMgZnJvbSB0aGlzIHNlY3Rpb24/Iiwib3B0aW9ucyI6WyJBLiBBIHNpbmdsZSBmYWN0b3IgXFwoKHMgKyAxMClcXCkiLCJCLiBBIGNvbnN0YW50IGdhaW4gXFwoS1xcKSIsIkMuIEEgcXVhZHJhdGljIGZhY3RvciBtYXRjaGluZyBcXChzXjIgKyAyXFx6ZXRhXFxvbWVnYV9uIHMgKyBcXG9tZWdhX25eMlxcKSIsIkQuIEEgcHVyZSBkZWxheSBcXChlXnstc1R9XFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQyIsImV4cGxhbmF0aW9uIjoiVGhlIHNlY3Rpb24gaXMgYWJvdXQgc2Vjb25kLW9yZGVyIHBvbGUgb3IgemVybyBmYWN0b3JzLCB3aGljaCBhcHBlYXIgYXMgbm9ybWFsaXplZCBxdWFkcmF0aWMgZmFjdG9ycyBpbiB0aGUgdHJhbnNmZXIgZnVuY3Rpb24uIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiQSBzaW5nbGUgcmVhbCBwb2xlIFxcKChzICsgMTApXFwpIHVzZXMgZmlyc3Qtb3JkZXIgQm9kZSBydWxlcywgZ2l2aW5nIFxcKC0yMFxcKSBkQi9kZWNhZGUuIiwiQiI6IkEgY29uc3RhbnQgZ2FpbiBcXChLXFwpIHNoaWZ0cyB0aGUgbWFnbml0dWRlIHVuaWZvcm1seSBidXQgaXMgbm90IGEgc2Vjb25kLW9yZGVyIHBvbGUgb3IgemVyby4iLCJEIjoiQSBwdXJlIGRlbGF5IFxcKGVeey1zVH1cXCkgYWZmZWN0cyBwaGFzZSBidXQgaXMgbm90IHRoZSBxdWFkcmF0aWMgc2Vjb25kLW9yZGVyIGZhY3RvciB0cmVhdGVkIGluIHRoaXMgc2VjdGlvbi4ifSwiaGludCI6Ikxvb2sgZm9yIGEgcXVhZHJhdGljIGluIFxcKHNcXCksIG5vdCBhIHNpbmdsZSBsaW5lYXIgZmFjdG9yLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfSx7ImlkIjoibWFnbml0dWRlX2FzeW1wdG90ZSIsImxhYmVsIjoiTWFnbml0dWRlIGFzeW1wdG90ZSBhbmQgc2xvcGUgZm9yIGEgc2Vjb25kLW9yZGVyIHBvbGUiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDJfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkZvciBhIHNlY29uZC1vcmRlciBwb2xlIHdpdGggXFwoXFxvbWVnYV9uID0gMTBcXCkgcmFkL3MsIHdoYXQgaXMgdGhlIG1hZ25pdHVkZSBhc3ltcHRvdGUgYmVoYXZpb3I/Iiwib3B0aW9ucyI6WyJBLiBGbGF0IGJlZm9yZSBcXCgxMFxcKSByYWQvcywgdGhlbiBzbG9wZSBcXCgtNDBcXCkgZEIvZGVjYWRlIiwiQi4gRmxhdCBiZWZvcmUgXFwoMTBcXCkgcmFkL3MsIHRoZW4gc2xvcGUgXFwoLTIwXFwpIGRCL2RlY2FkZSIsIkMuIFNsb3BlIFxcKC00MFxcKSBkQi9kZWNhZGUgYmVmb3JlIFxcKDEwXFwpIHJhZC9zLCB0aGVuIGZsYXQiLCJELiBGbGF0IGJlZm9yZSBcXCgxMDBcXCkgcmFkL3MsIHRoZW4gc2xvcGUgXFwoLTQwXFwpIGRCL2RlY2FkZSJdLCJjb3JyZWN0X29wdGlvbiI6IkEiLCJleHBsYW5hdGlvbiI6IkEgc2Vjb25kLW9yZGVyIHBvbGUgcGFpciBjb250cmlidXRlcyBhIFxcKC00MFxcKSBkQi9kZWNhZGUgc2xvcGUgYmVnaW5uaW5nIGF0IHRoZSBuYXR1cmFsIGZyZXF1ZW5jeSBcXChcXG9tZWdhX24gPSAxMFxcKSByYWQvcy4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkIiOiJcXCgtMjBcXCkgZEIvZGVjYWRlIGlzIHRoZSBzbG9wZSBvZiBvbmUgZmlyc3Qtb3JkZXIgcG9sZSwgbm90IGEgc2Vjb25kLW9yZGVyIHBvbGUgcGFpci4iLCJDIjoiVGhlIGRyb3AgYmVnaW5zIGFmdGVyIHRoZSBjb3JuZXIgZnJlcXVlbmN5IFxcKFxcb21lZ2FfblxcKSwgbm90IGJlZm9yZSBpdC4iLCJEIjoiVGhlIGNvcm5lciBpcyBhdCBcXChcXG9tZWdhX24gPSAxMFxcKSByYWQvcywgbm90IGF0IFxcKFxcb21lZ2Ffbl4yID0gMTAwXFwpIHJhZC9zLiJ9LCJoaW50IjoiQSBzZWNvbmQtb3JkZXIgcG9sZSBwYWlyIG1lYW5zIHR3byBwb2xlIGNvbnRyaWJ1dGlvbnMsIHNvIHRoZSBzbG9wZSBpcyB0d2ljZSB0aGF0IG9mIGEgZmlyc3Qtb3JkZXIgcG9sZS4iLCJuZWVkc192aXN1YWwiOnRydWUsInZpc3VhbF90eXBlIjoiYXN5bXB0b3RpY19ib2RlX3Nsb3BlX2NoZWNrIiwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfSx7ImlkIjoia3AyX3EyIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJBIHN0dWRlbnQgZHJhd3Mgb25seSBhIFxcKC0yMFxcKSBkQi9kZWNhZGUgc2xvcGUgYWZ0ZXIgXFwoXFxvbWVnYV9uXFwpIGZvciBhIGNvbXBsZXgtY29uanVnYXRlIHBvbGUgcGFpci4gV2h5IGlzIHRoaXMgd3Jvbmc/Iiwib3B0aW9ucyI6WyJBLiBBIHNlY29uZC1vcmRlciBwb2xlIHBhaXIgZ2l2ZXMgdHdpY2UgdGhlIGZpcnN0LW9yZGVyIHBvbGUgc2xvcGUuIiwiQi4gVGhlIHNsb3BlIHNob3VsZCBiZSBcXCgrMjBcXCkgZEIvZGVjYWRlIGJlY2F1c2UgYWxsIHNlY29uZC1vcmRlciBmYWN0b3JzIGFyZSB6ZXJvcy4iLCJDLiBUaGUgbWFnbml0dWRlIHNob3VsZCBhbHdheXMgc3RheSBhdCBcXCgwXFwpIGRCLiIsIkQuIFRoZSBzbG9wZSBzaG91bGQgYmVnaW4gYXQgXFwoMC4xXFxvbWVnYV9uXFwpLCBub3QgXFwoXFxvbWVnYV9uXFwpLiJdLCJjb3JyZWN0X29wdGlvbiI6IkEiLCJleHBsYW5hdGlvbiI6IkEgc2Vjb25kLW9yZGVyIHBvbGUgYmVoYXZlcyBsaWtlIHR3byBwb2xlIGNvbnRyaWJ1dGlvbnMsIHNvIHRoZSBoaWdoLWZyZXF1ZW5jeSBhc3ltcHRvdGUgZHJvcHMgYXQgXFwoLTQwXFwpIGRCL2RlY2FkZSwgbm90IFxcKC0yMFxcKSBkQi9kZWNhZGUuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJCIjoiQSBwb2xlIGRlY3JlYXNlcyBoaWdoLWZyZXF1ZW5jeSBtYWduaXR1ZGU7IGEgemVybyBpbmNyZWFzZXMgaXQuIFRoaXMgZmFjdG9yIGlzIGEgcG9sZS4iLCJDIjoiVGhlIFxcKDBcXCkgZEIgYXN5bXB0b3RlIGFwcGxpZXMgb25seSBiZWZvcmUgXFwoXFxvbWVnYV9uXFwpOyBhZnRlciBcXChcXG9tZWdhX25cXCkgdGhlIG1hZ25pdHVkZSBmYWxscy4iLCJEIjoiVGhlIG1hZ25pdHVkZSBhc3ltcHRvdGUgY29ybmVyIGlzIGF0IFxcKFxcb21lZ2FfblxcKSBpbiB0aGUgc3RhbmRhcmQgc2Vjb25kLW9yZGVyIEJvZGUgcnVsZS4ifSwiaGludCI6IkNvbXBhcmUgdGhlIHNsb3BlIG9mIG9uZSBmaXJzdC1vcmRlciBwb2xlIChcXCgtMjBcXCkgZEIvZGVjYWRlKSB2ZXJzdXMgYSBjb25qdWdhdGUgcG9sZSBwYWlyLiIsIm5lZWRzX3Zpc3VhbCI6dHJ1ZSwidmlzdWFsX3R5cGUiOiJ3cm9uZ192c19yaWdodF92aXN1YWxfY2hlY2siLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX0seyJpZCI6ImRhbXBpbmdfcmF0aW9fcmVzb25hbmNlIiwibGFiZWwiOiJEYW1waW5nIHJhdGlvIGNvbnRyb2xzIHJlc29uYW5jZSBhbmQgY29ycmVjdGlvbiBuZWFyIFxcKFxcb21lZ2FfblxcKSIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJtZWRpdW0iLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AzX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJPYnNlcnZlIHRoZSBkZW1vIHdpdGggXFwoXFx6ZXRhID0gMC4xXFwpLCB0aGVuIGluY3JlYXNlIFxcKFxcemV0YVxcKSB0byBcXCgxXFwpLiBXaGF0IGhhcHBlbnMgbmVhciBcXChcXG9tZWdhX25cXCk/Iiwib3B0aW9ucyI6WyJBLiBUaGUgcmVzb25hbmNlIHBlYWsgYmVjb21lcyBtdWNoIGxlc3MgcHJvbm91bmNlZCBvciBkaXNhcHBlYXJzLiIsIkIuIFRoZSBoaWdoLWZyZXF1ZW5jeSBzbG9wZSBjaGFuZ2VzIGZyb20gXFwoLTQwXFwpIHRvIFxcKC0yMFxcKSBkQi9kZWNhZGUuIiwiQy4gVGhlIGNvcm5lciBmcmVxdWVuY3kgY2hhbmdlcyBmcm9tIFxcKFxcb21lZ2FfblxcKSB0byBcXChcXG9tZWdhX25eMlxcKS4iLCJELiBUaGUgcG9sZSBiZWNvbWVzIGEgemVyby4iXSwiY29ycmVjdF9vcHRpb24iOiJBIiwiZXhwbGFuYXRpb24iOiJUaGUgZGFtcGluZyByYXRpbyBcXChcXHpldGFcXCkgY29udHJvbHMgdGhlIHJlc29uYW5jZSBwZWFrIG5lYXIgXFwoXFxvbWVnYV9uXFwpLiBMYXJnZXIgXFwoXFx6ZXRhXFwpIHJlZHVjZXMgb3IgZWxpbWluYXRlcyB0aGUgcGVhazsgdGhlIGFzeW1wdG90aWMgc2xvcGUgcmVtYWlucyBcXCgtNDBcXCkgZEIvZGVjYWRlIHJlZ2FyZGxlc3MuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJCIjoiQ2hhbmdpbmcgXFwoXFx6ZXRhXFwpIGFmZmVjdHMgdGhlIGV4YWN0IGN1cnZlIG5lYXIgcmVzb25hbmNlLCBub3QgdGhlIHBvbGUtcGFpciBhc3ltcHRvdGljIHNsb3BlLiIsIkMiOiJUaGUgbmF0dXJhbCBmcmVxdWVuY3kgbGFiZWwgcmVtYWlucyBcXChcXG9tZWdhX25cXCk7IFxcKFxcemV0YVxcKSBkb2VzIG5vdCBzaGlmdCB0aGUgY29ybmVyIGZyZXF1ZW5jeS4iLCJEIjoiQ2hhbmdpbmcgdGhlIGRhbXBpbmcgcmF0aW8gZG9lcyBub3QgY29udmVydCBhIHBvbGUgaW50byBhIHplcm8uIn0sImhpbnQiOiJXYXRjaCB0aGUgZXhhY3QgbmF2eSBjdXJ2ZSBuZWFyIHRoZSB2ZXJ0aWNhbCBcXChcXG9tZWdhX25cXCkgbWFya2VyIGFzIHlvdSBkcmFnIFxcKFxcemV0YVxcKS4iLCJuZWVkc192aXN1YWwiOnRydWUsInZpc3VhbF90eXBlIjoiZGVtb19vYnNlcnZhdGlvbl9jaGVjayIsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwM19xMiIsInR5cGUiOiJzaG9ydF9hbnN3ZXIiLCJzdGVtIjoiV2h5IGlzIGl0IHVuc2FmZSB0byB1c2Ugb25lIGZpeGVkIGRCIGNvcnJlY3Rpb24gYXQgXFwoXFxvbWVnYV9uXFwpIGZvciBldmVyeSBzZWNvbmQtb3JkZXIgcG9sZT8iLCJpZGVhbF9hbnN3ZXIiOiJCZWNhdXNlIHRoZSBleGFjdCBtYWduaXR1ZGUgbmVhciBcXChcXG9tZWdhX25cXCkgZGVwZW5kcyBvbiB0aGUgZGFtcGluZyByYXRpbyBcXChcXHpldGFcXCkuIEF0IFxcKFxcb21lZ2EgPSBcXG9tZWdhX25cXCksIHRoZSBtYWduaXR1ZGUgZXF1YWxzIFxcKC0yMFxcbG9nX3sxMH0oMlxcemV0YSlcXCkgZEIuIFNtYWxsIFxcKFxcemV0YVxcKSBjYW4gY3JlYXRlIGEgbGFyZ2UgcmVzb25hbmNlIHBlYWssIHdoaWxlIGxhcmdlciBcXChcXHpldGFcXCkgbWFrZXMgdGhlIHBlYWsgc21hbGwgb3IgYWJzZW50LiBUaGVyZSBpcyBubyBzaW5nbGUgdW5pdmVyc2FsIGNvcnJlY3Rpb24uIiwiZ3JhZGluZ19ydWJyaWMiOlsiTXVzdCBzdGF0ZSB0aGF0IHRoZSBjb3JyZWN0aW9uIGRlcGVuZHMgb24gXFwoXFx6ZXRhXFwpIiwiTXVzdCBtZW50aW9uIGJlaGF2aW9yIG5lYXIgXFwoXFxvbWVnYV9uXFwpIiwiTXVzdCBkaXN0aW5ndWlzaCB0aGUgZXhhY3QgY3VydmUgY29ycmVjdGlvbiBmcm9tIHRoZSBzdHJhaWdodC1saW5lIGFzeW1wdG90ZSJdLCJleHBsYW5hdGlvbiI6IlRoaXMgY2hlY2tzIHdoZXRoZXIgdGhlIHN0dWRlbnQgdW5kZXJzdGFuZHMgd2h5IHRoZSB0ZXh0Ym9vayBzaG93cyBhIGZhbWlseSBvZiBjdXJ2ZXMgZm9yIGRpZmZlcmVudCBcXChcXHpldGFcXCkgdmFsdWVzIGluc3RlYWQgb2Ygb25lIHVuaXZlcnNhbCBjb3JyZWN0aW9uIGN1cnZlLiIsImhpbnQiOiJBc2sgd2hhdCBjaGFuZ2VzIHdoZW4gXFwoXFx6ZXRhXFwpIG1vdmVzIGJ1dCBcXChcXG9tZWdhX25cXCkgc3RheXMgZml4ZWQuIExvb2sgYXQgdGhlIGZvcm11bGEgXFwoTF9wKFxcb21lZ2FfbikgPSAtMjBcXGxvZ197MTB9KDJcXHpldGEpXFwpLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfSx7ImlkIjoicGhhc2VfYmVoYXZpb3IiLCJsYWJlbCI6IlBoYXNlIGZvcm11bGEgYW5kIHBoYXNlIGFzeW1wdG90ZSBmb3IgYSBzZWNvbmQtb3JkZXIgcG9sZSIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoxfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwNF9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiV2hhdCBpcyB0aGUgY29udmVuaWVudCBwaGFzZSBhc3ltcHRvdGUgZm9yIGEgY29tcGxleC1jb25qdWdhdGUgc2Vjb25kLW9yZGVyIHBvbGUgcGFpcj8iLCJvcHRpb25zIjpbIkEuIEEgc3RlcCBmcm9tIFxcKDBeXFxjaXJjXFwpIHRvIFxcKC0xODBeXFxjaXJjXFwpIGF0IFxcKFxcb21lZ2FfblxcKSIsIkIuIEEgc3RlcCBmcm9tIFxcKDBeXFxjaXJjXFwpIHRvIFxcKC05MF5cXGNpcmNcXCkgYXQgXFwoXFxvbWVnYV9uXFwpIiwiQy4gQSBzdGVwIGZyb20gXFwoMF5cXGNpcmNcXCkgdG8gXFwoKzE4MF5cXGNpcmNcXCkgYXQgXFwoXFxvbWVnYV9uXFwpIiwiRC4gQSBjb25zdGFudCBcXCgtNDVeXFxjaXJjXFwpIGZvciBhbGwgZnJlcXVlbmNpZXMiXSwiY29ycmVjdF9vcHRpb24iOiJBIiwiZXhwbGFuYXRpb24iOiJBIHNlY29uZC1vcmRlciBwb2xlIHBhaXIgY29udHJpYnV0ZXMgYSB0b3RhbCBwaGFzZSBjaGFuZ2UgYXBwcm9hY2hpbmcgXFwoLTE4MF5cXGNpcmNcXCkgYXQgaGlnaCBmcmVxdWVuY3kuIFRoZSBzaW1wbGUgYXN5bXB0b3RlIGlzIGEgc3RlcCBmcm9tIFxcKDBeXFxjaXJjXFwpIHRvIFxcKC0xODBeXFxjaXJjXFwpIGF0IFxcKFxcb21lZ2FfblxcKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkIiOiJcXCgtOTBeXFxjaXJjXFwpIGlzIHRoZSBmaW5hbCBwaGFzZSBjb250cmlidXRpb24gb2YgYSBzaW5nbGUgZmlyc3Qtb3JkZXIgcG9sZSwgbm90IGEgc2Vjb25kLW9yZGVyIHBhaXIuIiwiQyI6IkEgcG9sZSBwYWlyIGdpdmVzIG5lZ2F0aXZlIHBoYXNlIGNvbnRyaWJ1dGlvbjsgcG9zaXRpdmUgcGhhc2Ugd291bGQgY29ycmVzcG9uZCB0byBhIHplcm8gcGFpci4iLCJEIjoiVGhlIHBoYXNlIGlzIGZyZXF1ZW5jeS1kZXBlbmRlbnQgYW5kIGFwcHJvYWNoZXMgYSBsaW1pdGluZyB2YWx1ZSBvZiBcXCgtMTgwXlxcY2lyY1xcKSwgbm90IGEgY29uc3RhbnQgXFwoLTQ1XlxcY2lyY1xcKS4ifSwiaGludCI6IlR3byBwb2xlIGNvbnRyaWJ1dGlvbnMgZWFjaCBhcHByb2FjaCBcXCgtOTBeXFxjaXJjXFwpLCBzbyB0aGUgcGFpciBhcHByb2FjaGVzIFxcKC0xODBeXFxjaXJjXFwpIHRvdGFsLiIsIm5lZWRzX3Zpc3VhbCI6dHJ1ZSwidmlzdWFsX3R5cGUiOiJwaGFzZV9hc3ltcHRvdGVfY2hlY2siLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfV19LHsiaWQiOiJzZWNvbmRfb3JkZXJfemVyb19taXJyb3IiLCJsYWJlbCI6IlNlY29uZC1vcmRlciB6ZXJvIG1pcnJvciBydWxlIiwiaW1wb3J0YW5jZSI6Im1lZGl1bSIsImV4YW1fd2VpZ2h0IjoibWVkaXVtIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoxfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwNV9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiQSBtYXRjaGluZyBsZWZ0LWhhbGYtcGxhbmUgc2Vjb25kLW9yZGVyIHplcm8gaGFzIHRoZSBzYW1lIFxcKFxcb21lZ2FfblxcKSBhbmQgXFwoXFx6ZXRhXFwpIGFzIGEgc2Vjb25kLW9yZGVyIHBvbGUuIEhvdyBkbyBpdHMgQm9kZSBwbG90cyBjb21wYXJlPyIsIm9wdGlvbnMiOlsiQS4gTWFnbml0dWRlIGFuZCBwaGFzZSBhcmUgbWlycm9yIGltYWdlcyBvZiB0aGUgcG9sZSBwbG90cywgc28gdGhlIHNpZ25zIHJldmVyc2UuIiwiQi4gTWFnbml0dWRlIGlzIGlkZW50aWNhbCB0byB0aGUgcG9sZSBwbG90LCBidXQgcGhhc2UgcmV2ZXJzZXMuIiwiQy4gUGhhc2UgaXMgaWRlbnRpY2FsIHRvIHRoZSBwb2xlIHBsb3QsIGJ1dCBtYWduaXR1ZGUgcmV2ZXJzZXMuIiwiRC4gQm90aCBtYWduaXR1ZGUgYW5kIHBoYXNlIGFyZSBpZGVudGljYWwgdG8gdGhlIHBvbGUgcGxvdHMuIl0sImNvcnJlY3Rfb3B0aW9uIjoiQSIsImV4cGxhbmF0aW9uIjoiRm9yIGNvbXBsZXgtY29uanVnYXRlIHplcm9zLCBib3RoIHRoZSBhbXBsaXR1ZGUgYW5kIHBoYXNlIHBsb3RzIGFyZSBtaXJyb3IgaW1hZ2VzIG9mIHRoZSBjb3JyZXNwb25kaW5nIHBvbGUgcGxvdHM6IFxcKExfeihcXG9tZWdhKSA9IC1MX3AoXFxvbWVnYSlcXCkgYW5kIFxcKFxccGhpX3ooXFxvbWVnYSkgPSAtXFxwaGlfcChcXG9tZWdhKVxcKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkIiOiJUaGUgbWFnbml0dWRlIGFsc28gZmxpcHMgc2lnbiBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgemVybywgbm90IGp1c3QgdGhlIHBoYXNlLiIsIkMiOiJUaGUgcGhhc2UgYWxzbyBmbGlwcyBzaWduIGZvciB0aGUgY29ycmVzcG9uZGluZyB6ZXJvLCBub3QganVzdCB0aGUgbWFnbml0dWRlLiIsIkQiOiJaZXJvcyBjb250cmlidXRlIG9wcG9zaXRlIHNpZ25zIHRvIHBvbGVzIGluIGJvdGggdGhlIGxvZyBtYWduaXR1ZGUgYW5kIHBoYXNlIHBsb3RzLiJ9LCJoaW50IjoiUG9sZSBjb250cmlidXRpb24gYW5kIHplcm8gY29udHJpYnV0aW9uIGhhdmUgb3Bwb3NpdGUgc2lnbnMgaW4gYm90aCB0aGUgbG9nIG1hZ25pdHVkZSBwbG90IGFuZCB0aGUgcGhhc2UgcGxvdC4iLCJuZWVkc192aXN1YWwiOnRydWUsInZpc3VhbF90eXBlIjoicG9sZV96ZXJvX21pcnJvcl9jb21wYXJpc29uIiwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX1dfV19" style="display:none;"></div>%%KC_END%%
