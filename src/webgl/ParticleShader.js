/**
 * @class
 * @private
 * @extends Tiny.Shader
 */
class ParticleShader extends Tiny.Shader {
  /**
   * @param {Tiny.Shader} gl - The webgl shader manager this shader works for.
   */
  constructor(gl) {
    super(
      gl,
      // vertex shader
      [
        'attribute vec2 aVertexPosition;',
        'attribute vec2 aTextureCoord;',
        'attribute float aColor;',

        'attribute vec2 aPositionCoord;',
        'attribute vec2 aScale;',
        'attribute float aRotation;',

        'uniform mat3 projectionMatrix;',

        'varying vec2 vTextureCoord;',
        'varying float vColor;',

        'void main(void){',
        '   vec2 v = aVertexPosition;',

        '   v.x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);',
        '   v.y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);',
        '   v = v + aPositionCoord;',

        '   gl_Position = vec4((projectionMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);',

        '   vTextureCoord = aTextureCoord;',
        '   vColor = aColor;',
        '}',
      ].join('\n'),
      // hello
      [
        'varying vec2 vTextureCoord;',
        'varying float vColor;',

        'uniform sampler2D uSampler;',
        'uniform float uAlpha;',
        'uniform vec3 tint;',

        'void main(void){',
        '  vec4 color = texture2D(uSampler, vTextureCoord) * vColor * vec4(tint * uAlpha, uAlpha);',
        '  if (color.a == 0.0) discard;',
        '  gl_FragColor = color;',
        '}',
      ].join('\n')
    );
  }
}

export default ParticleShader;
