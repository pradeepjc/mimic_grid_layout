import { Image, StyleSheet, View } from 'react-native';

export default function AppIcon({ icon, size = 56 }) {
  const radius = size * 0.225;

  if (icon === 'camera') return <CameraIcon size={size} radius={radius} />;
  if (icon === 'photos') return <PhotosIcon size={size} radius={radius} />;

  return (
    <Image
      source={icon}
      style={{ width: size, height: size, borderRadius: radius }}
      resizeMode="contain"
    />
  );
}

function CameraIcon({ size, radius }) {
  const bodyW = size * 0.72;
  const bodyH = size * 0.5;
  const lens = size * 0.32;
  return (
    <View style={[styles.center, { width: size, height: size, borderRadius: radius, backgroundColor: '#B8B8BD', overflow: 'hidden' }]}>
      <View style={[StyleSheet.absoluteFill, { bottom: '50%', backgroundColor: '#D5D5DA' }]} />
      <View
        style={{
          position: 'absolute',
          top: size * 0.2,
          width: size * 0.26,
          height: size * 0.1,
          borderTopLeftRadius: size * 0.04,
          borderTopRightRadius: size * 0.04,
          backgroundColor: '#1C1C1E',
        }}
      />
      <View
        style={[
          styles.center,
          { width: bodyW, height: bodyH, marginTop: size * 0.08, borderRadius: size * 0.1, backgroundColor: '#1C1C1E' },
        ]}
      >
        <View
          style={{
            width: lens,
            height: lens,
            borderRadius: lens / 2,
            borderWidth: size * 0.035,
            borderColor: '#8E8E93',
            backgroundColor: '#2C2C2E',
          }}
        />
        <View
          style={{
            position: 'absolute',
            top: bodyH * 0.14,
            right: bodyW * 0.1,
            width: size * 0.06,
            height: size * 0.06,
            borderRadius: size * 0.03,
            backgroundColor: '#FFCC00',
          }}
        />
      </View>
    </View>
  );
}

const PETAL_COLORS = ['#F5B700', '#F58A00', '#E9473F', '#C2378F', '#8E4FC8', '#3D7FE0', '#30B0C7', '#5DBB46'];

function PhotosIcon({ size, radius }) {
  const petalW = size * 0.22;
  const petalH = size * 0.38;
  return (
    <View
      style={[
        styles.center,
        { width: size, height: size, borderRadius: radius, backgroundColor: '#FFFFFF', borderWidth: StyleSheet.hairlineWidth, borderColor: '#D1D1D6' },
      ]}
    >
      {PETAL_COLORS.map((color, i) => (
        <View
          key={color}
          style={{
            position: 'absolute',
            width: petalW,
            height: petalH,
            borderRadius: petalW / 2,
            backgroundColor: color,
            opacity: 0.85,
            transform: [{ rotate: `${i * 45}deg` }, { translateY: -petalH / 2 }],
          }}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  center: { alignItems: 'center', justifyContent: 'center' },
});
